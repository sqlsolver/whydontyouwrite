Modernizr.addTest('highresdisplay', function(){ 
        if (window.matchMedia) { 
                var mq = window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
                if(mq && mq.matches) {
                        return true;
                } 
    }
});


if (Modernizr.touch) { 
//load touch enabled scripts	

	Modernizr.load
		(
			[
			'/library/framework/blog_theme/library/js/jquery.scrollTo.min.js',
			'/library/framework/blog_theme/library/js/jquery.localscroll.min.js',
			'/library/framework/blog_theme/library/js/jquery.autosize.min.js',
			'/library/framework/blog_theme/library/js/jquery.form.min.js',
			'/library/framework/blog_theme/library/js/jquery.validate.min.js',
			'/library/framework/blog_theme/library/js/init.touch.js'
			]
		)
	
} else { 
	
	if (Modernizr.mq && Modernizr.csstransforms3d) {
	//load modern browser scripts	
		Modernizr.load
		(
			[
			'/library/framework/blog_theme/library/js/lightbox-2.6.min.js',
			'/library/framework/blog_theme/library/js/jquery.autosize.min.js',
			'/library/framework/blog_theme/library/js/jquery.form.min.js',
			'/library/framework/blog_theme/library/js/jquery.validate.min.js',
			'/library/framework/blog_theme/library/js/jquery.scrollTo.min.js',
			'/library/framework/blog_theme/library/js/jquery.localscroll.min.js',
			'/library/framework/blog_theme/library/js/init.standard.js?v=0.2'
			]
		)
		}
	
	else { 
	//load legacy browser scripts
		Modernizr.load
		(
			[	
			'/library/framework/blog_theme/library/js/lightbox-2.6.min.js',
			'/library/framework/blog_theme/library/js/jquery.autosize.min.js',
			'/library/framework/blog_theme/library/js/jquery.form.min.js',
			'/library/framework/blog_theme/library/js/jquery.validate.min.js',
			'/library/framework/blog_theme/library/js/jquery.scrollTo.min.js',
			'/library/framework/blog_theme/library/js/jquery.localscroll.min.js',
			'/library/framework/blog_theme/library/js/respond.min.js?v=0.2',
			'/library/framework/blog_theme/library/js/selectivizr.min.js',
			'/library/framework/blog_theme/library/js/init.ie8.js?v=0.2'
			]		
		)
	}
	
}





