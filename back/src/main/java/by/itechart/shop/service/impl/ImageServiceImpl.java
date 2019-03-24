package by.itechart.shop.service.impl;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service("imageService")
public class ImageServiceImpl {

    public ClassPathResource getImage(String pathToImage){
        String path = "img/" + pathToImage;
        ClassPathResource imgFile = new ClassPathResource(path);
        return imgFile;
    }
}
