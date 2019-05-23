package by.itechart.shop.service.impl;

import by.itechart.shop.model.CartItem;
import by.itechart.shop.model.ProductShop;
import by.itechart.shop.repository.CartItemRepository;
import by.itechart.shop.repository.LaptopRepository;
import by.itechart.shop.repository.PhoneRepository;
import by.itechart.shop.service.dto.CartItemDto;
import by.itechart.shop.service.dto.CartItemViewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service("cartItemService")
public class CartItemServiceImpl {

    @Autowired
    ProductShopServiceImpl productShopService;

    @Autowired
    CartItemRepository cartItemRepository;

    @Autowired
    PhoneServiceImpl phoneService;

    @Autowired
    LaptopServiceImpl laptopService;

    @Autowired
    TvServiceImpl tvService;

//    @Autowired
//    TvRepository tvRepository;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    CartItemServiceImpl cartItemService;

    public CartItemDto createCartItemDto(Integer userId, Integer productShopId,
                                         BigDecimal fixedPrice){
        CartItemDto cartItemDto = new CartItemDto();
        cartItemDto.setFixedPrice(fixedPrice);
        cartItemDto.setProductShopId(productShopId);
        cartItemDto.setUserId(userId);
        return cartItemDto;
    }

    public CartItemDto createCartItemDto(Integer id, Integer userId, Integer productShopId,
                                         BigDecimal fixedPrice){
        CartItemDto cartItemDto = new CartItemDto();
        cartItemDto.setId(id);
        cartItemDto.setFixedPrice(fixedPrice);
        cartItemDto.setProductShopId(productShopId);
        cartItemDto.setUserId(userId);
        return cartItemDto;
    }

    public void saveCartItemDto(CartItemDto cartItemDto){
        CartItem cartItem = createCartItem(
                cartItemDto.getProductShopId(),
                cartItemDto.getUserId(),
                cartItemDto.getFixedPrice()
        );
        cartItemRepository.save(cartItem);
    }

    public CartItem createCartItem(Integer productShopId, Integer userId,
                                   BigDecimal fixedPrice){
        return new CartItem(
                productShopService.getProductShopById(productShopId),
                userService.getUserById(userId),
                fixedPrice
        );
    }

    public List<CartItemDto> getCartItemsByUserId(Integer userId){
        List<CartItem> cartItems = cartItemRepository.findCartItemByUserId(userId);

        List<CartItemDto> cartItemsDto = new ArrayList<>();
        if (cartItems != null){
            for (CartItem cartItem: cartItems) {
                cartItemsDto.add(createCartItemDto(
                        cartItem.getId(),
                        cartItem.getUser().getId(),
                        cartItem.getProductShop().getId(),
                        cartItem.getFixedPrice()
                        ));
            }
        }
        return cartItemsDto;
    }

    public Boolean isCartItemExist(Integer userId, Integer productShopId){

        Boolean isExist;
        if (cartItemRepository.findCartItemByProductShopIdAndUserId(productShopId, userId) == null){
            isExist = false;
        } else {
            isExist = true;
        }
        return isExist;
    }

    public List<CartItemViewDto> getCartItemViewsDto(Integer userId){

        List<CartItemViewDto> cartItemViewsDto = new ArrayList<>();

        List<CartItemDto> cartItemsDto = cartItemService.getCartItemsByUserId(userId);
        if (cartItemsDto != null)
            for (CartItemDto cartItemDto: cartItemsDto) {
                cartItemViewsDto.add(createCartItemViewDto(cartItemDto));
            }
        return cartItemViewsDto;
    }

    public CartItemViewDto createCartItemViewDto(CartItemDto cartItemDto){

        BigDecimal price = cartItemDto.getFixedPrice();
        Integer cartItemId = cartItemDto.getId();
//        System.out.println(cartItemId);

        ProductShop productShop = productShopService.getProductShopById(cartItemDto.getProductShopId());
        String shopName = productShop.getShop().getName();
        Integer productId = productShop.getProduct().getId();
        String productType = productShop.getProduct().getProductType().getName();

        String brand = "";
        String model = "";
        String imageName = "";
        Integer year = 0;

        switch (productType){
            case "phone":
                brand = phoneService.getPhoneByProductId(productId).getBrand().getName();
                model = phoneService.getPhoneByProductId(productId).getModel();
                year = phoneService.getPhoneByProductId(productId).getYear();
                imageName = phoneService.getPhoneByProductId(productId).getImageName();
                break;
            case "laptop":
                brand = laptopService.getLaptopByProductId(productId).getBrand().getName();
                model = laptopService.getLaptopByProductId(productId).getModel();
                year = laptopService.getLaptopByProductId(productId).getYear();
                imageName = laptopService.getLaptopByProductId(productId).getImageName();
                break;
            case "tv":
                brand = tvService.getTvByProductId(productId).getBrand().getName();
                model = tvService.getTvByProductId(productId).getModel();
                year = tvService.getTvByProductId(productId).getYear();
                imageName = tvService.getTvByProductId(productId).getImageName();
                break;

        }

        CartItemViewDto cartItemViewDto = new CartItemViewDto(cartItemId, productType, brand, model, year, imageName, shopName, price);
        return cartItemViewDto;
    }

    public String deleteById(Integer id){
        try {
            cartItemRepository.deleteById(id);
            return "ok";
        } catch (EmptyResultDataAccessException e){
            return "error";
        }
    }

}
