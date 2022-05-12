package by.bsuir.app.service.impl;

import by.bsuir.app.exception.InvalidReCaptchaException;
import by.bsuir.app.model.GoogleResponse;
import by.bsuir.app.service.CaptchaService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.regex.Pattern;

@Service
public class CaptchaServiceImpl implements CaptchaService {

    private static final Pattern RESPONSE_PATTERN = Pattern.compile("[A-Za-z0-9_-]+");
    private final RestTemplate restTemplate;

    @Value("${google.recaptcha.key.secret}")
    private String secretKey;

    @Value("${google.recaptcha.url}")
    private String captchaUrl;

    public CaptchaServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public void verifyCaptcha(String gRecaptchaResponse) {
        if (!responseSanityCheck(gRecaptchaResponse)) {
            System.out.println(gRecaptchaResponse);
            throw new InvalidReCaptchaException("Response contains invalid characters");
        }

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("secret", secretKey);
        map.add("response", gRecaptchaResponse);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, httpHeaders);

        GoogleResponse response = restTemplate
                .postForObject(captchaUrl, request, GoogleResponse.class);

        System.out.println(response);
        if (!response.isSuccess()) {
            throw new InvalidReCaptchaException("reCaptcha was not successfully validated");
        }
    }

    private boolean responseSanityCheck(String response) {
        return StringUtils.hasLength(response) && RESPONSE_PATTERN.matcher(response).matches();
    }
}
