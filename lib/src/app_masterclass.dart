import 'package:desafio_app_masterclass/src/core/themes/custom_theme_data.dart';
import 'package:desafio_app_masterclass/src/pages/home_page.dart';
import 'package:desafio_app_masterclass/src/pages/portfolio_page.dart';
import 'package:desafio_app_masterclass/src/pages/splash_page.dart';
import 'package:flutter/material.dart';
import 'package:device_preview/device_preview.dart';

class AppMasterclass extends StatelessWidget {
  const AppMasterclass({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      title: 'Flutter Masterclass',
      debugShowCheckedModeBanner: false,
      theme: customThemeData(),
      home: const SplashPage(),
      routes: {
        SplashPage.route: (context) => const SplashPage(),
        HomePage.route: (context) => const HomePage(),
        PortfolioPage.route: (context) => const PortfolioPage(),
       },
    );
  }
}
