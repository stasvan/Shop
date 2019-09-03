package by.itechart.shop.service.impl;

import by.itechart.shop.model.Tv;
import by.itechart.shop.repository.TvRepository;
import by.itechart.shop.service.dto.TvDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("tvService")
public class TvServiceImpl {

    @Autowired
    private TvRepository tvRepository;

    @Autowired
    private BrandServiceImpl brandService;

    @Autowired
    private ProductServiceImpl productService;

    public List<TvDto> getAllTvs() {
        List<Tv> tvs = tvRepository.findAll();
        List<TvDto> tvsDto = new ArrayList<>();
        for (Tv tv: tvs) {
            tvsDto.add(createTvDto(tv));
        }

        return tvsDto;
    }

    public TvDto getTvById(Integer id) {
        Tv tv = tvRepository.findTvById(id);
        TvDto tvDto = createTvDto(tv);
        return tvDto;
    }

    public TvDto getTvByBrandNameAndModel(String brandName, String model) {
        String brandNameNoHyphen = brandName.replace("-", " ");
        String modelNoHyphen = model.replace("-", " ");
        Tv tv = tvRepository.findTvByBrandNameAndModel(brandNameNoHyphen, modelNoHyphen);
        if (tv == null){
            return null;
        }

        TvDto tvDto = createTvDto(tv);
        return tvDto;
    }

    public TvDto getTvByProductId(Integer productId) {
        Tv tv = tvRepository.findTvByProductId(productId);
        TvDto tvDto = createTvDto(tv);
        return tvDto;
    }

    public List<TvDto> getTvs(Integer page, Integer limit, String brandName, Integer year) {

        Integer offset = limit * (page - 1);
        Pageable pageable = new PageRequest(page, limit);
        List<Tv> tvs = tvRepository
                .findTvsByBrandNameAndYearNamedParams(brandName, year, pageable);

        List<TvDto> tvsDto = new ArrayList<>();
        for (Tv tv: tvs) {
            tvsDto.add(createTvDto(tv));
        }

        return tvsDto;
    }

    public TvDto createTvDto(Tv tv){
        TvDto tvDto = new TvDto();

        tvDto.setId(tv.getId());
        tvDto.setBrand(brandService.createBrandDto(tv.getBrand()));
        tvDto.setProduct(productService.createProductDto(tv.getProduct()));
        tvDto.setModel(tv.getModel());
        tvDto.setYear(tv.getYear());
        tvDto.setResolution(tv.getResolution());
        tvDto.setTechnology(tv.getTechnology());
        tvDto.setDiagonal(tv.getDiagonal());
        tvDto.setImageName("http://localhost:8090/image/tv/" + tv.getBrand().getName() + "/" + tv.getImageName());
        return tvDto;
    }

}