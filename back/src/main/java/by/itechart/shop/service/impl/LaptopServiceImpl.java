package by.itechart.shop.service.impl;

import by.itechart.shop.model.Laptop;
import by.itechart.shop.repository.LaptopRepository;
import by.itechart.shop.service.dto.LaptopDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("laptopService")
public class LaptopServiceImpl {

    @Autowired
    private LaptopRepository laptopRepository;

    @Autowired
    private BrandServiceImpl brandService;

    @Autowired
    private ProductServiceImpl productService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<LaptopDto> getAllLaptops() {
        List<Laptop> laptops = laptopRepository.findAll();
        List<LaptopDto> laptopsDto = new ArrayList<>();
        for (Laptop laptop: laptops) {
            laptopsDto.add(createLaptopDto(laptop));
        }

        return laptopsDto;
    }

    public LaptopDto getLaptopById(Integer id) {
        Laptop laptop = laptopRepository.findLaptopById(id);
        LaptopDto laptopDto = createLaptopDto(laptop);
        return laptopDto;
    }

    public List<LaptopDto> getLaptopsByCharacteristics(String brandName, String ram, Integer year) {

        List<Laptop> laptops = laptopRepository.findLaptopsByBrandNameAndRamAndYearNamedParams(brandName, ram, year);

        List<LaptopDto> laptopsDto = new ArrayList<>();
        for (Laptop laptop: laptops) {
            laptopsDto.add(createLaptopDto(laptop));
        }
        return laptopsDto;
    }

    public LaptopDto createLaptopDto(Laptop laptop){
        LaptopDto laptopDto = new LaptopDto();

        laptopDto.setId(laptop.getId());
        laptopDto.setBrand(brandService.createBrandDto(laptop.getBrand()));
        laptopDto.setProduct(productService.createProductDto(laptop.getProduct()));
        laptopDto.setModel(laptop.getModel());
        laptopDto.setYear(laptop.getYear());
        laptopDto.setCpu(laptop.getCpu());
        laptopDto.setRam(laptop.getRam());
        laptopDto.setScreenResolution(laptop.getScreenResolution());
        laptopDto.setScreenTechnology(laptop.getScreenTechnology());
        laptopDto.setScreenDiagonal(laptop.getScreenDiagonal());
        laptopDto.setCamera(laptop.getCamera());
        laptopDto.setStorage(laptop.getStorage());
        laptopDto.setImageName("http://localhost:8090/image/laptop/" + laptop.getBrand().getName() + "/" + laptop.getImageName());
        return laptopDto;
    }



}