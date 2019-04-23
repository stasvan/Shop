package by.itechart.shop.controller;

import by.itechart.shop.service.dto.LaptopDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.LaptopServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LaptopController {

    @Autowired
    LaptopServiceImpl laptopService;

    @Autowired
    ImageServiceImpl imageService;

//    @GetMapping("/phones")
//    public List<Phone> getPhones(){
//        return phoneService.getAllPhones();
//    }

    @GetMapping("/laptops/{laptopId}")
    @CrossOrigin("http://localhost:3000")
    public LaptopDto getLaptopById(@PathVariable("laptopId") Integer id){
        return laptopService.getLaptopById(id);
    }



    @GetMapping("/laptops")
    @CrossOrigin("http://localhost:3000")
    public List<LaptopDto> getLaptopsByBrand(@RequestParam(name="brand", required = false) String brandName,
                                            @RequestParam(name="year", required = false) Integer year,
                                            @RequestParam(name="ram", required = false) String ram){

        List<LaptopDto> laptops = laptopService.getLaptopsByCharacteristics(brandName, ram, year);

        return laptops;
    }


}