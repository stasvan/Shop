//package by.itechart.shop.controller;
//
//
//import by.itechart.shop.model.Phone;
//import by.itechart.shop.service.dto.PhoneDto;
//import by.itechart.shop.service.impl.PhoneServiceImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.*;
//
//import java.io.File;
//import java.util.List;
//
//@RestController
//
//public class ImageController {
//
//    @RequestMapping("/image/{personId}")
//    @ResponseBody
//    public HttpEntity<byte[]> getPhoto(@PathVariable String personId) {
//        byte[] image = FileUtils.readFileToByteArray(new File( + File.separator + personId + ".png"));
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.IMAGE_PNG);
//        headers.setContentLength(image.length);
//        return new HttpEntity<byte[]>(image, headers);
//    }
//
//
//
//
//
//}