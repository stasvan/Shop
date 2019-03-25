package by.itechart.shop.controller;


import by.itechart.shop.model.Phone;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
public class ImageController {

    @Autowired
    ImageServiceImpl imageService;

    @GetMapping("/image/{productType}/{brand}/{imageName}")
    @CrossOrigin("http://localhost:3000")
    public void getImage(@PathVariable("imageName") String imageName,
                         @PathVariable("brand") String brand,
                         @PathVariable("productType") String productType,
                         HttpServletResponse response) throws IOException {

        ClassPathResource imgFile = imageService.getImage(productType + "/" + brand + "/" + imageName);

        response.setContentType(MediaType.IMAGE_PNG_VALUE);

        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }

    @GetMapping("/image/shop/{imageName}")
    @CrossOrigin("http://localhost:3000")
    public void getImage(@PathVariable("imageName") String imageName,
                         HttpServletResponse response) throws IOException {

        ClassPathResource imgFile = imageService.getImage("shop/" + imageName);

        response.setContentType(MediaType.IMAGE_PNG_VALUE);

        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }





}