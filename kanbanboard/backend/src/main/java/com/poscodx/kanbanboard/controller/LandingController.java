package com.poscodx.kanbanboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LandingController {
	
	@RequestMapping("")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/favicon.ico")
	@ResponseBody
	void returnNoFavicon() {
		// 이 메서드는 빈 응답을 반환하여 favicon 요청을 무시합니다.
	}
}
