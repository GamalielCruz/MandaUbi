import PageIllustrationOne from "@/components/page-illustration-one";
import 'add-to-calendar-button';

export default function layout() {
  return (
    <section className="relative">
      <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
      
            <div className="w-full h-screen max-h-[36rem] p-24 relative overflow-hidden block z-10
            bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVqXZqORModfP26L_AuuqsXCZLKJMgLMjqxkYd_KoIsY7HTSiaYGMVH7Gi-yyh0zXLtwab1tK3os1TTXX_notw7pqEOtPWzHD9c_7BPksZk0QTEkUAWr0KxEiewR9NYoqKaGwmJbLCR0Qync65rVTU4RmzEjuHrZN4-bxzG7Wi1oUHSs__QOaKjSwQsKQ/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%285%29.png')]
            bg-cover
            bg-no-repeat
            bg-top
            bg-transparent
            ">
            <div className=" relative block justify-items-center">

            <div className="p-5  max-w-xs justify-center ">
                <img className="box-content" 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAEN77EU5GHtadNG4D4hK6u5hD88F5CTxzMNzcPYT-q5vAnAJU7RYxzh3EyQQd6_SeBhsPN-5CE_eYb9AAByew-1k8v6KpeGSGk_Wa3O9O3-j08Qaxf70XWTteYAf3I3VyRzXO-tcYjAqN-LAdLImIShb8ihDz7Y_QuIyRRRDOCn1aBTB8OkmId2hM4yk/s1600/1.png"
                />
            </div>

	          <h1 className="-m-10 text-gray-50 text-center font-mono text-4xl justify-center"> MIS XV AÑOS</h1>
            
            <h1 className="p-16 text-5xl text-gray-50 font-serif font-bold flex justify-center">
                Brenda
            </h1>

            <p className="-m-10 text-2xl text-white text-center font-mono">
                26 / DIC / 2024
            </p>

            <div className="p-5  max-w-xs justify-center ">
                <img className="box-content" 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD9i38kTwkM0vj8oK4ckW9fvBhyphenhyphenM1ichfnK2_2KDrfTrj9Gnkz1JRlzdAs32VRuki-4pssSA8Vq3A5QvvTUkg-J43bQR9m4tUspUq_o9h4651gO2KLSxq95jB5TkszXRsOaz_cqj36TPlF2OLMfMkG43nU1ss7eqsJe4jKk-4s9zrF3Gdis4eb-wBvPVA/s1600/2.png"
                />
            </div>

            <div className="p-5  max-w-xs justify-center">
              <add-to-calendar-button
              name="Mis XV Años"
              description="Acompañame a mi gran dia!"
              startDate="2025-02-21"
              endDate="2025-02-21"
              startTime="20:00"
              endTime="21:59"
              location="https://maps.app.goo.gl/mW3esuWRHgQYhvQo7"
              options="['Apple','Google','Microsoft365']"
              timeZone="Mexico/General"
              trigger="click"
              inline
              listStyle="modal"
              iCalFileName="Reminder-Event"
              label="Agregar a mi calendario"
              />
            </div>

            </div>

            </div>
               

    </section>
  );
}
