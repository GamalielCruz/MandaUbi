import PageIllustrationOne from "@/components/page-illustration-one";
import 'add-to-calendar-button';

export default function layout() {
  return (
    <section className="bg-yellow-50">
      <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>

    {/* Imagen de fondo + componentes de datos y calendario */}      
      <div className="w-full   bg-gray-100 overflow-hidden">
  <div
    className="w-full  bg-cover bg-top bg-no-repeat "
    style={{
      backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVqXZqORModfP26L_AuuqsXCZLKJMgLMjqxkYd_KoIsY7HTSiaYGMVH7Gi-yyh0zXLtwab1tK3os1TTXX_notw7pqEOtPWzHD9c_7BPksZk0QTEkUAWr0KxEiewR9NYoqKaGwmJbLCR0Qync65rVTU4RmzEjuHrZN4-bxzG7Wi1oUHSs__QOaKjSwQsKQ/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%285%29.png')`,
    }}
  >
    <div className="relative flex flex-col items-center gap-8 max-w-screen-lg mx-auto">
      <div className="max-w-xs lg:max-w-md w-full flex justify-center overflow-hidden">
        <img
          className="w-full h-auto rounded-md object-cover object-top"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAEN77EU5GHtadNG4D4hK6u5hD88F5CTxzMNzcPYT-q5vAnAJU7RYxzh3EyQQd6_SeBhsPN-5CE_eYb9AAByew-1k8v6KpeGSGk_Wa3O9O3-j08Qaxf70XWTteYAf3I3VyRzXO-tcYjAqN-LAdLImIShb8ihDz7Y_QuIyRRRDOCn1aBTB8OkmId2hM4yk/s1600/1.png"
          alt="Imagen 1"
        />
      </div>

      <h1 className="text-gray-50 text-center font-mono text-4xl">MIS XV AÑOS</h1>
      <h1 className="text-5xl text-gray-50 font-serif font-bold text-center">Brenda</h1>
      <p className="text-2xl text-white text-center font-mono">26 / DIC / 2024</p>

      <div className="max-w-xs lg:max-w-md w-full flex justify-center overflow-hidden">
        <img
          className="w-full h-auto rounded-md object-cover object-top"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD9i38kTwkM0vj8oK4ckW9fvBhyphenhyphenM1ichfnK2_2KDrfTrj9Gnkz1JRlzdAs32VRuki-4pssSA8Vq3A5QvvTUkg-J43bQR9m4tUspUq_o9h4651gO2KLSxq95jB5TkszXRsOaz_cqj36TPlF2OLMfMkG43nU1ss7eqsJe4jKk-4s9zrF3Gdis4eb-wBvPVA/s1600/2.png"
          alt="Imagen 2"
        />
      </div>

      <div className="relative flex justify-center p-5">
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

 
  
      </div>
    {/* Separador */}    
      <div className=" flex justify-center h-44 -m-10">
           <img
           className=" "
           src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1psJblINqG_bDaS620xCdNDG_lYcFCAe-e057dSlrCUt3V5vGqXD8QSv6yoNkZRpl6fsct7coRQxo_zOKnOJxFDT6vhFnoi3SYGPrWxVw8MoR8b0KVvhGYMzUrS2wOekn9MqjB6KZn_3l9GnyGBJfWYEzcMP1e1l4TNBkYenk3cbGsq_WZ3rFUAI5xjE/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2811%29.png"
           alt="Imagen de separador vertical"
            />
      </div>
    {/* Información familiar mas fotos */}       
     <div className="flex flex-col items-center gap-10 p-5">

  <div className="relative flex flex-col-reverse md:flex-row shadow-sm rounded-lg justify-center max-w-screen-lg w-full">
   
    <div className="p-5 flex justify-center">
      <img
        className="rounded-md md:rounded-lg max-w-full"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV6KHBK81a0-zzPVb2Qvg7QmV4mms_seBE6CvtOO0fcIys923L6mkPzo41s2WyCSLb0fhUBtxFC8a_Fxhbu0kIWbO14jCXGQ2_Ecgf2SZaepiBrB3_nr0ZZQHpWszOGoEql02TwTChAzZZzIhXCxXTmotFnDqV-AM_6w-1bhgUG3ndsUU6kF_YF6Yri7k/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%287%29.png"
        alt="card-image"
      />
    </div>
   
    <div className="p-4 flex flex-col items-center w-full max-w-md">
      <div className="flex justify-center items-center w-full">
        <img
          className="w-64 p-6"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnwfeO-m-svA1AuRZ4jwrUf1YbU1qoJg10yXMftEJpY1cgyULTujSizv9i-ijYx06fTNhAGRAbmYmwzxKmb4UVBXhY5U69VOIEDDToAREwRTf2y_YWyRrBSuWaU4iGSS4m6oO2gllLZiLvDOWLho82AT52doQ06EYh1lxqVUrsxENdPDLHdWkmnsPcDtQ/s1600/PADRES%20%281%29.png"
          alt="Imagen de Fernando y Pamela"
        />
      </div>
      <h4 className="mb-2 text-gray-900 text-4xl text-center font-serif">
        Fernando Gutiérrez
      </h4>
      <h4 className="mb-2 text-yellow-700 text-4xl text-center font-serif">
        &
      </h4>
      <h4 className="mb-2 text-gray-900 text-4xl text-center font-serif">
        Pamela Centeno
      </h4>
      <div className="absolute inset-0 -z-10 h-full w-full bg-yellow-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  </div>

  <div className="relative flex flex-col md:flex-row shadow-sm rounded-lg justify-center max-w-screen-lg w-full">
  
    <div className="p-4 flex flex-col items-center w-full max-w-md">
      <div className="flex justify-center items-center w-full">
        <img
          className="w-64 p-6"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyDxpvPvZ8thSiPKTnN1tnhPCpoUV2-U0XpdvzyVhiOp49PagFKMx12KHQhXHNFrIM22ecaH_A3GflCteyGoPAPK-864PncGwF6Nuch90h1V-C4IQWsxOJFJqiAJmcdHstnUU0fhs5F2MJpWAXh84U4xovQNFNzHKIHwaJQy6qzQTGM0ES9Lt86xgEhJg/s1600/PADRES%20%282%29.png"
          alt="Imagen de Oscar y Silvia"
        />
      </div>
      <h4 className="mb-2 text-gray-900 text-4xl text-center font-serif">
        Oscar Juárez
      </h4>
      <h4 className="mb-2 text-yellow-700 text-4xl text-center font-serif">
        &
      </h4>
      <h4 className="mb-2 text-gray-900 text-4xl text-center font-serif">
        Silvia Castañón
      </h4>
      <div className="absolute inset-0 -z-10 h-full w-full bg-orange-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>

    <div className="p-5 flex justify-center">
      <img
        className="rounded-md md:rounded-lg max-w-full"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4dKpW9tP3N1uzCkh4-P5TkB_uDvMjNsGRYiGqVfFipI_sTL-wnKGhWy7oRnL4qgvYmbVOeh7UKYu5mq5eYjG-nITcYi1oFLrgAtFImg4MLwLrsEd-8o49xx1-1-Q7pkRPMEuzsX_yurJQ_B3ze-HW1c2EBVgTi1aiVudUCEuYJ8LYQqwOZZhhvvCwRY8/s1600/a%20%286%29.png"
        alt="card-image"
      />
    </div>
  </div>
     </div>
    {/* Separador y contador */}    
    <div className="relative justify-items-center m-14 p-10">
      <div className=" flex justify-center h-20">
           <img
           className=" "
           src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5TPosPogzSo1H1v50-twZNkdUS4-oAmpttQfySrKQjU6fLXl-tlrkllUdJljvmT9v50Al3S_vvZ5Rltmw9RXyX59ycX0G66qMxeiKFBoaVcUpJtYKge_qFenwe2QVkVc0I87g1Pnr62spL7xiOzFhNQMx5wZhxPqRYcMDtpgZ7cvCQ_xg3nNHhhoflXE/s1600/Sin%20t%C3%ADtulo%20%28400%20x%20100%20px%29%20%281%29.png"
           alt="Imagen de separador vertical"
            />
      </div>

  

  <div className="flex justify-center items-center w-full">
    <img
      className="w-80 "
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKkxZ5pz6b87Pp_9kEVski1HxLDpmXk37WmUzS1mD6lF2589Cd_02t2EfGbo2Gx-ZxGLIRV9IwbEwuh406xh_Lgo4tvePKZo1v-GSc5Kn5kOD3NVegcYc1F7w-OGUGqdobbMvOi3gtvX6syCKXXECiVmfUXT9H7Iuijk79JMFKDvvJUXHJynfK0h5Z6Ac/s1600/PADRES%20%283%29.png"
      alt="Solo Falta"
    />
  </div>


  <div className="flex justify-center items-center w-full mt-6 bg-yellow-900 rounded-lg">
    <div className="pointer-events-none">
      <iframe
        className="w-full max-w-md aspect-video"
        src="https://www.tickcounter.com/widget/countdown/6283534"
        title="Contador de tiempo"
      ></iframe>
    </div>
  </div>
    </div>
    {/* Separador */}      
    <div className=" flex justify-center h-40 ">
           <img
           className=" "
           src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1psJblINqG_bDaS620xCdNDG_lYcFCAe-e057dSlrCUt3V5vGqXD8QSv6yoNkZRpl6fsct7coRQxo_zOKnOJxFDT6vhFnoi3SYGPrWxVw8MoR8b0KVvhGYMzUrS2wOekn9MqjB6KZn_3l9GnyGBJfWYEzcMP1e1l4TNBkYenk3cbGsq_WZ3rFUAI5xjE/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2811%29.png"
           alt="Imagen de separador vertical"
            />
    </div>
    {/* Ubicación */}       
    <div className="relative">
      
     <div className="flex justify-center items-center w-full">
        <img
        className="w-80 m-20"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2hXJhjE_hN4F2ywoOa1tz61VlingoL3LT5fdO2LjhsxkeD1yC57-dcCbY7407xYFv_W2qf2tzTXf76D535-_H92Bs8GgTxkzS04KONHB2hc18AuNJTzRZysaIl2zTKUyuj2dIEl2QXNUfWN171WO0-47nopxA2Thc2GxNp9diDXy8U8W1DN85O-XphCk/s1600/PADRES%20%284%29.png"
        alt="Ubicación"
      />
    </div>


    <div className="flex flex-wrap justify-center gap-5 p-4">

  <div className="flex flex-col shadow-sm border border-slate-200 w-full sm:w-80 max-w-sm">
    <h4 className="p-2 m-3 text-2xl font-serif text-slate-900 text-center">
      Ceremonia Religiosa
    </h4>
    <div className="overflow-hidden rounded-md h-40 flex justify-center items-center">
      <img
        className="w-20"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQZ-UfQn20eeI4GF6Z1CIm7Skq3R24cxNiV8siyKWwG1J2DlwLSZ85cG27w6dax1HQJNmiUNGFjhzU5DAe_mFEBZ18PFo2NoN_uaoPRZxszli2Ey3lL_ovjKveCEyzXjqVGLpkjco9nHn4w55OkQVfQfCIAEGL4RDfB9kt7S9r3kX-H3euvl5Lrxhfpac/s1600/a%20%2810%29.png"
        alt="Iglesia"
      />
    </div>
    <div className="p-2 text-center">
      <p className="text-sm font-serif text-slate-800 uppercase">
        Sabado 26 de diciembre <br />
        17:30 HRS
      </p>
      <p className="text-base font-serif text-slate-800 mt-4 font-light">
        Parroquia de Nuestra Señora de la Luz <br />
        Av. de la Luz S/N, Santa Ana, 76116 Santiago de Querétaro, Qro.
      </p>
    </div>
    <div className="flex justify-center p-4 gap-2">
      <a
        href="https://www.google.com"
        className="text-white bg-[#322c08a0] hover:bg-[#322c08]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Ir a la Ubicación
      </a>
    </div>
  </div>

 
  <div className="flex flex-col shadow-sm border border-slate-200 w-full sm:w-80 max-w-sm">
    <h4 className="p-2 m-3 text-2xl font-serif text-slate-900 text-center">
      Recepción
    </h4>
    <div className="overflow-hidden rounded-md h-40 flex justify-center items-center">
      <img
        className="w-20"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia-AZRRy64wKxYGbK4Ksqd12BdrKJmOwVQPxwL1j7N5g0o81TjOh4sAK87IhTTVX-WvAYYXbC5u9yysAF-SEAS4SWNwL6MhsWvK8ifHUfiKuGBZ91FF3q2Jybx2aVB3JtLymqaanVuF_7H7yRTiPpCIJCxz1PHSitigdjzc9VnghMtEpVySY0RVLn9Fy0/s1600/a%20%289%29.png"
        alt="Recepción"
      />
    </div>
    <div className="p-2 text-center">
      <p className="text-sm font-serif text-slate-800 uppercase">
        Sabado 26 de diciembre <br />
        19:40 HRS
      </p>
      <p className="text-base font-serif text-slate-800 mt-4 font-light">
        Lantana Jardín y Salones <br />
        Fraccionamiento Pirámides, Unnamed Road, 76900 Corregidora, Qro.
      </p>
    </div>
    <div className="flex justify-center p-4 gap-2">
      <a
        href="https://www.google.com"
        className="text-white bg-[#322c08a0] hover:bg-[#322c08]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Ir a la Ubicación
      </a>
    </div>
  </div>
</div>
  

<div className="text-transparent p-8">
  ...
</div>

    </div>
    {/* Mesa de regalos */}    
    <div className="relative">
      
     <div className="flex justify-center items-center w-full">
        <img
        className="w-96 m-20"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbCbrsfJQjuH6bvyU0rcb5mN65RL4wp4nV7EKQRSj6jFnvMIouXyj3S8dPXrinSoSW_HphcUizv3m6PuP48idFuYk4xKMtOLJI9drgVn9kExNhERZcXLquQNomvEQgsmwM1N4VMcrTUtE99Y8tU2Ybg6Je02kRXM9QJ-RpOUNiqnLjvDBHQH83WnKy-cQ/s1600/PADRES%20%285%29.png"
        alt="Mesa de regalos"
      />
    </div>
    
    <div className="text-lg font-serif text-center m-10 text-gray-950">
      Tu compañía es el mejor regalo, pero si deseas tener un detalle, aquí te compartimos algunas sugerencias:
    </div>

    <div className="flex flex-wrap justify-center gap-5 p-4">

  <div className="flex flex-col shadow-sm border border-slate-200 w-full sm:w-80 max-w-sm">
    <h4 className="p-2 text-2xl font-serif text-slate-900 text-center">
    Lluvia de Sobres
    </h4>
    <div className="overflow-hidden rounded-md h-40 flex justify-center items-center">
      <img
        className="w-20"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiIya2gEZqrFbw4tHyJ9twmuRN6feifIQRbGbwoGc3iVGRn8qnt6rqfwnKtZlW_8go67ANuYOH7DTlSKuaUXVJF0_yCue64NylT560Wmkba1Ne6g0JqXyCTV-am3f-qwckUJDyY6GuUBgK1NjWpbnvlurW029jjPFII2f2IW0zlg3H2iYoqYCfBVJuKPk/s1600/a%20%2811%29.png"
        alt="Sobres"
      />
    </div>
    <div className=" text-center">
      
      <p className="text-base font-serif text-slate-900 font-light">
      Es costumbre entregar un sobre con dinero en efectivo a la quinceañera como detalle especial durante la fiesta de sus XV años
      </p>
    </div>
    
  </div>

 
  <div className="flex flex-col shadow-sm border border-slate-200 w-full sm:w-80 max-w-sm">
    <h4 className="p-2 m-3 text-2xl font-serif text-slate-900 text-center">
    Liverpool
    </h4>
    <div className="p-2 text-center">
      <p className="text-base font-serif text-slate-800  font-light">
        Código: <br />
        1234567
      </p>
    </div>
    <div className="flex justify-center p-4 gap-2">
      <a
        href="https://www.google.com"
        className="text-white bg-[#322c08a0] hover:bg-[#322c08]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
       
        Ver Regalos
      </a>
    </div>
  </div>
</div>
  

<div className="text-transparent p-8">
  ...
</div>

    </div>
    </section>
  );
}
