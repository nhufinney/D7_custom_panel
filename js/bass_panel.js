(function ($) {
  Drupal.behaviors.bass_panel = {
    attach: function (context, settings) {

      if (typeof ads=='undefined') {
        ads = new Array();
      }

      if (typeof ord == 'undefined') { ord=Math.random()*10000000000000000; }
      if (typeof(dfp_tile) == 'undefined') dfp_tile = 4;

      $(".ad_panel").each(function(){
        var option = $(this).attr('data-dimension');

        if (option == 1) {
          ads['300x68'] = '<script language="JavaScript" src="http://ad.doubleclick.net/N8798/adj/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=300x68;ord=8227348253;?" type="text/javascript"><\/script>';
          ads['300x68'] = ads['300x68'].replace(/ord=\d+/, 'ord=' + ord);
          ads['300x68'] = ads['300x68'].replace(/tile=\d+/, 'tile=' + dfp_tile++);
          $(this).append('<a href="http://ad.doubleclick.net/N8798/adj/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=300x68;ord=8227348253;" target="_blank" > <img src="http://ad.doubleclick.net/N8798/ad/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=300x68;ord=8227348253;" width="300" height="68" border="0" alt="" /> </a>');
        }

        if (option == 2) {

          ads['300x250'] = '<script language="JavaScript" src="http://ad.doubleclick.net/N8798/adj/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=300x250;ord=8227348253;?" type="text/javascript"><\/script>';
          ads['300x250'] = ads['300x250'].replace(/ord=\d+/, 'ord=' + ord);
          ads['300x250'] = ads['300x250'].replace(/tile=\d+/, 'tile=' + dfp_tile++);
          $(this).append('<a href="http://ad.doubleclick.net/N8798/jump/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=300x250;ord=8227348253;" target="_blank" > <img src="http://ad.doubleclick.net/N8798/ad/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=300x250;ord=8227348253;" width="300" height="250" border="0" alt="" /> </a>');
        }

        if (option == 3) {
          ads['728x90'] = '<script language="JavaScript" src="http://ad.doubleclick.net/N8798/adj/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=728x90;ord=8227348253;?" type="text/javascript"><\/script>';
          ads['728x90'] = ads['728x90'].replace(/ord=\d+/, 'ord=' + ord);
          ads['728x90'] = ads['728x90'].replace(/tile=\d+/, 'tile=' + dfp_tile++);
          $(this).append('<a href="http://ad.doubleclick.net/N8798/jump/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=728x90;ord=8227348253;" target="_blank" > <img src="http://ad.doubleclick.net/N8798/ad/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=728x90;ord=8227348253;" width="728" height="90" border="0" alt="" /> </a>');
        }


        if (option == 4) {
          ads['924x50'] = '<script language="JavaScript" src="http://ad.doubleclick.net/N8798/adj/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=924x50;ord=8227348253;?" type="text/javascript"><\/script>';
          ads['924x50'] = ads['924x50'].replace(/ord=\d+/, 'ord=' + ord);
          ads['924x50'] = ads['924x50'].replace(/tile=\d+/, 'tile=' + dfp_tile++);
          $(this).append('<a href="http://ad.doubleclick.net/N8798/jump/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=924x50;ord=8227348253;" target="_blank" > <img src="http://ad.doubleclick.net/N8798/ad/bassmaster.main/home/landing;s1=home;s2=landing;s3=null;pid=;kw=;test=off;pos=top;bas=ad;dcopt=;tile=4;sz=924x50;ord=8227348253;" width="924" height="50" border="0" alt="" /> </a>');
        }
      });

    }};
})(jQuery);

