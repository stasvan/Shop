package by.itechart.shop.service;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service("imageService")
public class ImageServiceImpl {

    public ClassPathResource getImage(String imageName){
        String path = "img/phones/" + imageName;
        ClassPathResource imgFile = new ClassPathResource(path);
        return imgFile;
    }
}
