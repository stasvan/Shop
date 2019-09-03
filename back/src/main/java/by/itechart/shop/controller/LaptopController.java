package by.itechart.shop.controller;

import by.itechart.shop.service.dto.LaptopDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.LaptopServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class LaptopController {

    @Autowired
    LaptopServiceImpl laptopService;

    @Autowired
    ImageServiceImpl imageService;

    @GetMapping("/laptops/{brandName}/{model}")
    @CrossOrigin("http://localhost:3000")
    public LaptopDto getLaptopByBrandNameAndModel(@PathVariable("brandName") String brandName,
                                                @PathVariable("model") String model){
        return laptopService.getLaptopByBrandNameAndModel(brandName, model);
    }


    @GetMapping("/laptops/page/{page}/{limit}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity getLaptops(@PathVariable(name="page", required = true) Integer page,
                                     @PathVariable(name="limit", required = true) Integer limit,
                                     @RequestParam(name="brand", required = false) String brandName,
                                     @RequestParam(name="year", required = false) Integer year,
                                     @RequestParam(name="ram", required = false) String ram,
                                     @RequestParam(name="search", required = false) String search){

        List<LaptopDto> laptops = laptopService.getLaptops(page, limit, brandName, ram, year, search);
        Integer laptopsCount = laptops.size();

        Map<Object, Object> model = new HashMap<>();
        model.put("laptops", laptops);
        model.put("laptopsCount", laptopsCount);
        return ok(model);
    }


}