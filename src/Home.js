const Home = () => {
  return (
    <div className="home-page">
      <h1>Use of IoT in Traffic System</h1>
      <article>
        The internet of things (IoT) is a simple way to communicate with all the
        related devices. There are so many smart devices available in the market
        right now, and almost all of these can be connected with one another
        using IoT technology. This WebApp is an honest try to demonstrate some
        application of IoT in the real world traffic scenario.
      </article>

      <article>
        <h2>
          <i>Scenario:</i>
        </h2>
        <p>
          <i>
            We will consider a car parking scenario. In this scenario, there is
            a requirement of an IoT system that detects an arriving car, open
            gate(/entrance), and then record their number plate value from via
            Image Processing in Real-time.
          </i>
        </p>
      </article>

      <article>
        You can switch through all the tabs via the navigator(top frame/bar)
        where the solution of the given scenario is been entertained one by one.
        Briefly, the functionality of these 4 tabs are as follows:
        <ol>
          <li>Home</li>
          <li>Proximity sensing</li>
          <li>Object Detection</li>
          <li>Vehicle Record</li>
        </ol>
      </article>

      <ol>
        <article>
          <li className="main-pt">
            <h2>Home</h2>
          </li>
          <p>
            This is the current page that you are viewing. Contains Scenario and
            description of the Web Application.
          </p>
        </article>

        <article>
          <li className="main-pt">
            <h2>Proximity Sensing</h2>
          </li>
          <p>
            Here you will find an Embedded system simulation. Any problem
            related to the Traffic system is unachievable without any use of
            proximity sensing. For solving a traffic-related problem the primary
            state the requirement is the position of a vehicle or object on the
            road.
          </p>
          <p>
            With the help of <u>TikerCAD</u>, we have designed a basic distance
            sensory system. The designed model is then embedded into this
            web-page that will provide you with a convenient way to observe the
            working of the proximity sensor.
          </p>
        </article>
        <article>
          <li className="main-pt">
            <h2>Object Detection</h2>
          </li>
          <p>
            Apart from just knowing the position, the system requires
            distinguishing and identifying the object. For this problem, One
            takes the help of Computer Vision.
          </p>
          <p>
            Here we are taking live images from your webcam and applying
            <u> TensorFlow Coco-ssd model</u> which is an Object Detection
            Model. This model is trained to identify up to 80 different objects,
            many of which can also be witnessed in general traffic, such as
            cars, bicycle, motorbike, truck, bus, person, etc. This demonstrates
            the how we can take the help of CV in various problems like counting
            number of vehicles passed in a certain period, Traffic jams,
            collisions, pedestrians walking, accidents, etc.
          </p>
        </article>
        <article>
          <li className="main-pt">
            <h2>Vehicles Records</h2>
          </li>
          <p>
            After tackling with first two problems, the final task remains is to
            Store the Vehicles Details into a DataBase. Here the records are
            being stored into <u>mySQL</u> server by using express Nodejs.
            Through this WebApp, you are free to enter new inputs of Vehicle
            numbers that will get stored along with the date and time value to
            the server. WebApp also provides you the access to delete selected
            records from the database.
          </p>
        </article>
      </ol>
    </div>
  );
};

export default Home;
