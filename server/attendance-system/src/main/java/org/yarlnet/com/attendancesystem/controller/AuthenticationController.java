package org.yarlnet.com.attendancesystem.controller;

import lombok.RequiredArgsConstructor;
import org.yarlnet.com.attendancesystem.dto.request.AuthenticationRequest;
import org.yarlnet.com.attendancesystem.dto.response.AuthenticationResponse;
import org.yarlnet.com.attendancesystem.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
