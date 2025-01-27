package com.ginger.controller;

import com.ginger.pojo.Result;
import com.ginger.pojo.User;
import com.ginger.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    @CrossOrigin()
    public Result login(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password) {
           User user1 =  loginService.login(username,password);
           if (user1 != null) {
               return Result.success(user1,"登录成功");
           }else{
                return Result.error("404","登陆失败");
           }
    }

    @PostMapping("/register")
    @CrossOrigin()
    public Result register(@RequestBody User user) {
        User user1 = loginService.selectByUsername(user);
        if (user1 != null) {
            System.out.println("username:"+user1.getUsername()+"is existed");
            return Result.error("12","username is existed");
        }else{
            loginService.register(user);
            return Result.success(user);
        }
    }


    @RequestMapping("/")
    public String Test() {
        return "hello";
        }


}

