package by.itechart.shop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "brand")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String site;

    @OneToMany(mappedBy = "brand")
    private List<Phone> phones = new ArrayList<Phone>();

    public Brand() {
    }

    public Brand(String name, String site) {
        this.name = name;
        this.site = site;
    }

    public Integer getId() {
      return id;
    }

    public void setId(Integer id) {
      this.id = id;
    }


    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }


    public String getSite() {
      return site;
    }

    public void setSite(String site) {
      this.site = site;
    }

}
