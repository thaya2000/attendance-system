package org.yarlnet.com.attendancesystem.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.yarlnet.com.attendancesystem.dto.request.AuthenticationRequest;
import org.yarlnet.com.attendancesystem.dto.response.AuthenticationResponse;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {

    private final JwtService jwtService;

    @Value("${user.credentials.file}")
    private String credentialsFile;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return loadUserCredentials(username)
                .map(credentials -> User.withUsername(username)
                        .password("{noop}" + credentials[1])
                        .authorities("ROLE_USER")
                        .build())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        UserDetails userDetails = loadUserByUsername(request.getUsername());
        if (userDetails.getPassword().equals("{noop}" + request.getPassword())) {
            String token = jwtService.generateToken(userDetails);
            return new AuthenticationResponse(token);
        } else {
            throw new RuntimeException("Invalid Credentials");
        }
    }

    private Optional<String[]> loadUserCredentials(String username) {
        try (BufferedReader br = new BufferedReader(new FileReader(credentialsFile))) {
            return br.lines()
                    .map(line -> line.split(" "))
                    .filter(credentials -> credentials[0].equals(username))
                    .findFirst();
        } catch (IOException e) {
            throw new RuntimeException("Error reading credentials file", e);
        }
    }
}
