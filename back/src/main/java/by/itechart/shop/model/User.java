package by.itechart.shop.model;


import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer roleId;
    private String email;
    private String password;


      public Integer getId() {
        return id;
      }

      public void setId(Integer id) {
        this.id = id;
      }

      public Integer getRoleId() {
        return roleId;
      }

      public void setRoleId(Integer roleId) {
        this.roleId = roleId;
      }

      public String getEmail() {
        return email;
      }

      public void setEmail(String email) {
        this.email = email;
      }

      public String getPassword() {
        return password;
      }

      public void setPassword(String password) {
        this.password = password;
      }

}
