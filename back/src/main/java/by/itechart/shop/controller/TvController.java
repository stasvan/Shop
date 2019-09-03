package by.itechart.shop.controller;

import by.itechart.shop.service.dto.TvDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.TvServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;


@RestController

public class TvController {

    @Autowired
    TvServiceImpl tvService;

    @Autowired
    ImageServiceImpl imageService;

    @GetMapping("/tvs/{brandName}/{model}")
    @CrossOrigin("http://localhost:3000")
    public TvDto getTvByBrandNameAndModel(@PathVariable("brandName") String brandName,
                                          @PathVariable("model") String model){
        return tvService.getTvByBrandNameAndModel(brandName, model);
    }


    @GetMapping("/tvs/page/{page}/{limit}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity getTvs(@PathVariable(name="page", required = true) Integer page,
                                    @PathVariable(name="limit", required = true) Integer limit,
                                    @RequestParam(name="brand", required = false) String brandName,
                                    @RequestParam(name="year", required = false) Integer year){

        List<TvDto> tvs = tvService.getTvs(page, limit, brandName, year);
        Integer tvsCount = tvs.size();

        Map<Object, Object> model = new HashMap<>();
        model.put("tvs", tvs);
        model.put("tvsCount", tvsCount);
        return ok(model);
    }

}