package by.itechart.shop.controller;

import by.itechart.shop.service.ImageService;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.io.IOException;


@RestController

public class PhoneController {

    @Autowired
    PhoneServiceImpl phoneService;

    @Autowired
    ImageService imageService;

//    @GetMapping("/phones")
//    public List<Phone> getPhones(){
//        return phoneService.getAllPhones();
//    }

    @GetMapping("/phones/{id}")
    @CrossOrigin("http://localhost:3000")
    public PhoneDto getPhoneById(@PathVariable("id") Integer id){
        return phoneService.getPhoneById(id);
    }



    @GetMapping("/phones")
    @CrossOrigin("http://localhost:3000")
    public List<PhoneDto> getPhonesByBrand(@RequestParam(name="brand", required = false) String brand){
        List<PhoneDto> phones;
        if (brand == null){
            phones = phoneService.getAllPhones();
        }else{
            phones = phoneService.getPhonesByBrand(brand);
        }

        return phones;
    }

//    @GetMapping("/phones/image_{imageName}")
//    @CrossOrigin("http://localhost:3000")
//    public ResponseEntity<byte[]> getImageById(@PathVariable("imageName") String imageName) {
//        byte[] image = ImageService.getImage(imageName);
//
//        return ResponseEntity.ok().contentType(MediaType.TEXT_HTML).body(image);
//    }

    @GetMapping("/phones/image/{imageName}")
    @CrossOrigin("http://localhost:3000")
    public void getImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {

        ClassPathResource imgFile = imageService.getImage(imageName);

        response.setContentType(MediaType.IMAGE_PNG_VALUE);

        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }

}