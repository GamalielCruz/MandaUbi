import PageIllustrationOne from "@/components/page-illustration-one";
import 'add-to-calendar-button';

export default function layout() {
  return (
    <section className="">
      <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
            
            <div>
            <div className="w-full h-screen max-h-[42rem] p-24 overflow-hidden block z-10
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
            
            {/*Nubes*/}
            <div className="relative -mt-12 lg:-mt-24">
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
            </svg>
            </div>
            
            
            {/*2 Nombre del invitado*/}
            <div className="relative justify-items-center text-center">
            <div className="p-10 m-0 bg-white">              
            <div className="  justify-items-center">          
	          <h1 className="p-10 text-gray-600 text-center font-serif font-extralight text-3xl justify-center">Invitación para:
            </h1>
            <h1 className="p-6 text-4xl text-gray-950 font-serif font-semibold  text-center">
                Nombre del invitado
            </h1>            
            

            <h1 className="p-10 text-gray-900 font-serif">¡Estaría encantada de que me acompañaras en este día tan especial!</h1>          
            </div>

            <div className="static justify-items-center bg-white">
              
            <h3 className="  font-medium text-5xl font-serif">
              <img
                  className="inline-block justify-items-center"
                  width={60}
                  height={60}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhivapmh1_caSrvpXw-AT_1CAv1F1wjTVSeUZhfEEHXXFg8w0XYhzyPObP9GCq6fa29EeC_y0tiw9Hrq9QBU1Vdyd_aJxFk0EEZaiLTxx3I21TatLZkW5gus4bqwGW3XfZq_La_eZRWceGq7HDHVrv2SiYd0dSfzso86Q7I2Himv7mLlOanFb5j-7x1CIQ/s1600/a%20%285%29.png"
                /> 
                3
              </h3>
              <p className="p-3 text-gray-900 text-2xl font-serif">Pases disponibles</p>
            </div>
            <div className="p-20 bg-transparent text-transparent  ">
              ...
                
            </div>
            </div>
            
            <PageIllustrationOne/>
            </div>

           
            </div>

           
           
          <div className="relative flex flex-col-reverse  shadow-sm border border-slate-200 rounded-lg items-center">
            <div className="relative p-2.5 max-w-2xl flex-shrink-0 ">
            <img
             src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV6KHBK81a0-zzPVb2Qvg7QmV4mms_seBE6CvtOO0fcIys923L6mkPzo41s2WyCSLb0fhUBtxFC8a_Fxhbu0kIWbO14jCXGQ2_Ecgf2SZaepiBrB3_nr0ZZQHpWszOGoEql02TwTChAzZZzIhXCxXTmotFnDqV-AM_6w-1bhgUG3ndsUU6kF_YF6Yri7k/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%287%29.png"
             alt="card-image"
             className=" rounded-md md:rounded-lg"
          />
           </div>
          <div className="p-6 inline-block justify-items-center">
          <div className="absolute inset-0 -z-10 h-full w-full bg-yellow-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-yellow-600 opacity-30 blur-[100px]"></div></div>          
          <div className="inline-block justify-items-center">
          <img
             src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnwfeO-m-svA1AuRZ4jwrUf1YbU1qoJg10yXMftEJpY1cgyULTujSizv9i-ijYx06fTNhAGRAbmYmwzxKmb4UVBXhY5U69VOIEDDToAREwRTf2y_YWyRrBSuWaU4iGSS4m6oO2gllLZiLvDOWLho82AT52doQ06EYh1lxqVUrsxENdPDLHdWkmnsPcDtQ/s1600/PADRES%20%281%29.png"
             alt="card-image"
             className="p-5 w-2/4  justify-items-center"
          />
          </div>
          <h4 className="mb-2 text-gray-900 text-4xl text-center font-serif">
          Fernando Gutiérrez 
          </h4>
          <h4 className=" mb-2 text-yellow-700 text-4xl text-center font-serif">
           &
          </h4>
          <h4 className="mb-2 text-gray-900 text-4xl text-center font-serif">
          Pamela Centeno
          </h4>
          </div>
          </div> 

    </section>
  );
}
