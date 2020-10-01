package tms.gobike.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tms.gobike.model.User;
import tms.gobike.repository.UserRepository;

/**
 * @author woboland
 */
@Controller
public class HomepageController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String index() {
        User currentUser = new User("Will Boland", "Bloomington", "IN", "woboland", "password", "3174456668", "woboland@iu.edu", 1, "test");
        userRepository.save(currentUser);
        return "index";
    }
}
