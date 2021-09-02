import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Courses.css";
import Row from "./Row";
import Card from "./Card";
import "./Android.css";


const Android = ({product, setProduct}) => {

  const cards = [
    {
      id: Math.random() * 10,
      src: "https://courses.javacodegeeks.com/wp-content/uploads/2020/02/1625800_2ffc_5-300x300.jpg",
      title: "Android Java Masterclass",
      desc: "Improve your career options by learning Android app Development. Master Android Studio and build your first app.",
      price: "₹385",
      cutprice: "₹6,400",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/master-android-7-nougat-java-app-development-step-by-step/",
    },
    {
      id: Math.random() * 10,
      src: "https://www.slashgear.com/wp-content/uploads/2011/01/android_s2-hexcode_pre.jpg",
      title: "The Complete Android 10",
      desc: " Learn Android Development From Beginner to Advanced Developer. Build Apps like Trello and 7Min Workout.",
      price: "₹499",
      cutprice: "₹9,000",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/android-kotlin-developer/",
    },
    {
      id: Math.random() * 10,
      src: "https://cdn.eduonix.com/assets/images/header_img/2020062508133511994.jpg",
      title: "Android Multithreading Class",
      desc: "Complete guide to multithreading in Android. From fundamentals to Thread Pools, RxJava and Kotlin.",
      price: "₹786",
      cutprice: "₹1,999",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/android-multithreading/",
    },
    {
      id: Math.random() * 10,
      src: "https://media.onlinefreecourse.net/udemy/2018/08/26061733/cPNPjQ.jpg",
      title: "The Mobile Development",
      desc: "In this course, you'll learn Android Development and get to build your own Android R apps by using Java..",
      price: "₹450",
      cutprice: "₹7,200",
      rating: "★★★☆☆",
      view: "https://www.udemy.com/course/java-android-complete-guide/",
    },
    {
      id: Math.random() * 10,
      src: "https://digitalmediaglobe.com/wp-content/uploads/2017/04/Udemy-Android-Course-Review.jpg",
      title: "Android App Development",
      desc: " Android App Development for complete beginners, make beautiful apps, get a job in 2021, Java AND Kotlin!",
      price: "₹799",
      cutprice: "₹3,999",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/the-complete-android-developer-bootcamp/",
    },
    {
      id: Math.random() * 10,
      src: "https://www.educative.io/v2api/collection/6100126873419776/6055343571337216/image/4657441726791680",
      title: "The Comprehensive 2021",
      desc: "Master Modern Android API's: ROOM Database, ML Kit Face Recognition, FirebaseMaps and Android Studio",
      price: "₹459",
      cutprice: "₹5,600",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/android-development-java-android-studio-masterclass/",
    },
    {
      id: Math.random() * 10,
      src: "https://www.spaceotechnologies.com/wp-content/uploads/2020/12/android_app_development_course_for_beginners1.png",
      title: "The Complete Android Kotlin",
      desc: "Build online games, and apps for Android Q, like Pokémon , twitter,Tic Tac Toe, and notepad using Kotlin",
      price: "500",
      cutprice: "₹9,670",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/the-complete-kotlin-developer-course/",
    },
    {
      id: Math.random() * 10,
      src: "https://udemydownload.com/wp-content/uploads/2021/04/Flutter-Firebase-Build-a-Complete-App-for-iOS-Android-390x220.jpg",
      title: "Android App Development",
      desc: " Learn Kotlin Android App Development And Become an Android Developer. Incl. Kotlin Tutorial and Android Tutorial.",
      price: "₹899",
      cutprice: "₹9,999",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/",
    },
    {
      id: Math.random() * 10,
      src: "https://miro.medium.com/max/966/1*ZQJ7-0G48FRy72VJ77hrfA.png",
      title: "The Complete Android 11 Jetpack",
      desc: "Android Development with Jetpack, MVVM Clean Architecture, Compose, UnitTesting, Dagger/Hilt, Retrofit.",
      price: "₹385",
      cutprice: "₹6,400",
      rating: "★★★☆☆",
      view: "https://www.udemy.com/course/android-architecture-componentsmvvm-with-dagger-retrofit/",
    },
    {
      id: Math.random() * 10,
      src: "https://i0.wp.com/freecoursewebsite.com/wp-content/uploads/2020/09/Download-Android-App-Development-Masterclass-using-Kotlin-2020.jpg?fit=521%2C305&ssl=1&resize=350%2C200",
      title: "Kotlin for Android Masterclass",
      desc: "Learn Kotlin Coroutines in depth and practice advanced Coroutines use cases in Android application",
      price: "₹880",
      cutprice: "₹9,510",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/kotlin-coroutines-in-android/",
    },
    {
      id: Math.random() * 10,
      src: "https://freecourseudemy.com/wp-content/uploads/2020/01/The-Complete-Android-Kotlin-Developer-Course-1.jpg",
      title: "Android Architecture Masterclass",
      desc: " Embrace clean design and architecture in Android apps. Employ Dependency Injection of Concerns principle",
      price: "₹400",
      cutprice: "₹6,400",
      rating: "★★★☆☆",
      view: "https://www.udemy.com/course/android-architecture/",
    },
    {
      id: Math.random() * 10,
      src: "http://www.cromacampus.com/wp-content/uploads/2017/08/android-training-croma-campus.jpg",
      title: "Make a Freaking Android App",
      desc: "Make apps for Android M - Marshmallow, using Android Studio for Mac or Windows.",
      price: "₹567",
      cutprice: "₹4,800",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/how-to-make-a-freaking-android-app/",
    },
  ];
  let arr = [];
  for (let i = 0; i <= cards.length - 4; i += 4) {
    arr.push(
      <Row>
        <Card
          key={cards[i].id}
          src={cards[i].src}
          title={cards[i].title}
          desc={cards[i].desc}
          price={cards[i].price}
          cutprice={cards[i].cutprice}
          rating={cards[i].rating}
          view={cards[i].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 1].id}
          src={cards[i + 1].src}
          title={cards[i + 1].title}
          desc={cards[i + 1].desc}
          price={cards[i + 1].price}
          cutprice={cards[i + 1].cutprice}
          rating={cards[i + 1].rating}
          view={cards[i + 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 2].id}
          src={cards[i + 2].src}
          title={cards[i + 2].title}
          desc={cards[i + 2].desc}
          price={cards[i + 2].price}
          cutprice={cards[i + 2].cutprice}
          rating={cards[i + 2].rating}
          view={cards[i + 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 3].id}
          src={cards[i + 3].src}
          title={cards[i + 3].title}
          desc={cards[i + 3].desc}
          price={cards[i + 3].price}
          cutprice={cards[i + 3].cutprice}
          rating={cards[i + 3].rating}
          view={cards[i + 3].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  }
  if (cards.length % 4 === 1) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  } else if (cards.length % 4 === 2) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 2].id}
          src={cards[cards.length - 2].src}
          title={cards[cards.length - 2].title}
          desc={cards[cards.length - 2].desc}
          price={cards[cards.length - 2].price}
          cutprice={cards[cards.length - 2].cutprice}
          rating={cards[cards.length - 2].rating}
          view={cards[cards.length - 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  } else if (cards.length % 4 === 3) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 3].id}
          src={cards[cards.length - 3].src}
          title={cards[cards.length - 3].title}
          desc={cards[cards.length - 3].desc}
          price={cards[cards.length - 3].price}
          cutprice={cards[cards.length - 3].cutprice}
          rating={cards[cards.length - 3].rating}
          view={cards[cards.length - 3].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 2].id}
          src={cards[cards.length - 2].src}
          title={cards[cards.length - 2].title}
          desc={cards[cards.length - 2].desc}
          price={cards[cards.length - 2].price}
          cutprice={cards[cards.length - 2].cutprice}
          rating={cards[cards.length - 2].rating}
          view={cards[cards.length - 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  }

  return (
    <div className="App">
      <h1 class="heading">
        <span>Andriod Development</span>
      </h1>
      <div className="container">{arr}</div>
    
    </div>
  );
};
export default Android;
