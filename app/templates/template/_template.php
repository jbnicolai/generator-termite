<?
/**
 * @author <%= author %>
 * @date <%= date %>
 */
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= projectName %></title>
    <link rel="shortcut icon" href="http://static.tieba.baidu.com/tb/favicon.ico" />
    <?php
      echo HTML::combocss(array(<% if(uiPlugins.indexOf('sweetalert')>-1){ %>
        //sweetalert插件 doc:http://tristanedwards.me/sweetalert
        '<%= modName %>/libs/sweetalert/sweet_alert.css',<% } %><% if(uiPlugins.indexOf('animate.css')>-1){ %>
        //animate.css插件 doc:http://daneden.github.io/animate.css/
        '<%= modName %>/libs/animate.css',<% } %>
        //views下面合并后的css
        '<%= modName %>/static/app/dist/main.css',
        //本项目css 文件
        '<%= modName %>/template/<%= projectFoler %>/index.css'
      ));
    ?>
    <?php
      echo HTML::combojs(array(
        //本项目的插件,其他文件类似这样引入即可<% if(uiPlugins.indexOf('sweetalert')>-1){ %>
        //sweetalert插件 doc:http://tristanedwards.me/sweetalert
        '<%= modName %>/libs/sweetalert/sweet_alert.js',<% } %>
        '<%= modName %>/template/<%= projectFoler %>/index.js'
      ));
    ?>
  </head>
  <body>
      <navbar></navbar>
      <div class="container">
        <div ng-view>
        </div>
      </div>
      <hr>
      <footer class="text-center">
        <p class="text-muted">&copy;<?php echo date("Y"); ?> 百度贴吧 | <%= projectName %></p>
      </footer>
  </body>
  
  <?php
  /**
   * 如下代码用将由框架负责处理js资源加载到页面
   */
  echo HTML::js('app/dist/main.js', "<%= modName %>");
  echo HTML::js('app/dist/templates.js', "<%= modName %>");
  ?>

  <?php
  echo HTML::getScript('important'); ?>
  <?php
  echo HTML::getJs(); ?>
  <?php
  echo HTML::getScript('normal'); ?>
  <?php
  echo HTML::getScript('optional'); ?>
</html>
