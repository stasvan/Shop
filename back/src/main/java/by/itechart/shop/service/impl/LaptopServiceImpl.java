package by.itechart.shop.service.impl;

import by.itechart.shop.model.Laptop;
import by.itechart.shop.repository.LaptopRepository;
import by.itechart.shop.service.dto.LaptopDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    public LaptopDto getLaptopByBrandNameAndModel(String brandName, String model) {
        String brandNameNoHyphen = brandName.replace("-", " ");
        String modelNoHyphen = model.replace("-", " ");
        Laptop laptop = laptopRepository.findLaptopByBrandNameAndModel(brandNameNoHyphen, modelNoHyphen);
        if (laptop == null){
            return null;
        }

        LaptopDto laptopDto = createLaptopDto(laptop);
        return laptopDto;
    }

    public LaptopDto getLaptopByProductId(Integer productId) {
        Laptop laptop = laptopRepository.findLaptopByProductId(productId);
        LaptopDto laptopDto = createLaptopDto(laptop);
        return laptopDto;
    }

    public List<LaptopDto> getLaptops(Integer page, Integer limit, String brandName, String ram, Integer year) {

        Integer offset = limit * (page - 1);
        Pageable pageable = new PageRequest(page, limit);
        List<Laptop> laptops = laptopRepository
                .findLaptopsByBrandNameAndRamAndYearNamedParams(brandName, ram, year, pageable);

        List<LaptopDto> laptopsDto = new ArrayList<>();
        for (Laptop laptop: laptops) {
            laptopsDto.add(createLaptopDto(laptop));
        }

        return laptopsDto;
    }

    public Long getLaptopsCount(String brandName, String ram, Integer year){
        Long laptopsCount = laptopRepository.count();

        return laptopsCount;
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