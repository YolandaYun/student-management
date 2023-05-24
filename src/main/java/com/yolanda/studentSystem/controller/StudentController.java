package com.yolanda.studentSystem.controller;

import com.yolanda.studentSystem.model.Student;
import com.yolanda.studentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        // @RequestBody automatically deserialize a client to server request to a java object
        studentService.saveStudent(student);
        return "New student added!";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
