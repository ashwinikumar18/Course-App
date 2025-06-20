package com.springrest.demo.service;

//import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.demo.dao.CourseDao;
import com.springrest.demo.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
	//List<Course> list;
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(145, "PG-DAC Course", "This is the flagship course of CDAC, focusing on software development and programming. It covers C/C++, Java, Data Structures, DBMS, Web Technologies, and Software Engineering, preparing students for careers in software development."));
//		list.add(new Course(240, "PG-DESD", "This course trains students in designing and developing embedded systems using real-time operating systems, microcontrollers, C programming, and hardware-software co-design."));
//		list.add(new Course(308, "PG-DBDA", "Aimed at professionals seeking careers in data science and analytics. It includes training in Hadoop, Spark, Python, R, Machine Learning, and data visualization."));
//		list.add(new Course(4343, "PG-DIoT", "Focuses on IoT architecture, protocols, and application development. It combines hardware interfacing, cloud computing, and analytics to build real-world IoT solutions."));
//		list.add(new Course(500, "PG-DVLSI", " Designed for students interested in Very-Large-Scale Integration (VLSI) and embedded systems. It includes training in digital design, VHDL, Verilog, FPGA design, and ASIC design methodologies."));
//		
	}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
		//return list;
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
//		Course c =null;
//		for (Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}
		//return c;
		//return courseDao.getOne(courseId);
		 return courseDao.findById(courseId).orElse(null);  
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
	//	list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		    list.forEach(e -> {
//		        if (e.getId() == course.getId()) {
//		            e.setTitle(course.getTitle());
//		            e.setDescription(course.getDescription());
//		        }
//		    });
		courseDao.save(course);
		    return course;
		
	}

	@Override
	public void deleteCourse(long parseLong) {
		// TODO Auto-generated method stub
//		    list = this.list.stream()
//		                   .filter(e -> e.getId() != parseLong)
//		                   .collect(Collectors.toList());
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		}
	}

