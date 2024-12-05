import PageIllustrationOne from "@/components/page-illustration-one";
import 'add-to-calendar-button';

export default function layout() {
  return (
    <section className="relative">
      <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
      <PageIllustrationOne />
              <div className="relative ">
              <div
   className="bg-cover  relative "
   style={{
    backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK30VFIw-8Zl3-KBGDADgE4uINFKa2_H0dpJ3yfkvijRHDyPLqYHzMDYXjUfetd-nQF3HJdAV6gJ4OkuNtHX0SYoE_QHmCO5v_c5Q_FduyPv1wkub-qhtj173JakBiIDZ_yCUOP30rq5Ne7-q_8AJMMY7FXJHjCS8inK4wGOFKQyb7Y5vtC8hjKbyhKfk/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%284%29.png')`,
     height: "400px",
    }}
  >
</div>

                <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5 ">
                </div>
              </div>

              <div className="p-5 flex justify-center -space-x-3">
                <img
                  className="box-content "
                  width={302}
                  height={102}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijVSXnEAb28m474DkAdb7SEf5Irlqh0LNyJXpAmQALJ91LzvdDNc9tLjQUVmXIanzD1jlO_asc51zYMJggQSl0swELgSa_EHojxJoSaIl_nA4wVC-OCmYK6otRzp7HAAGZv6X-MzeiOnCx46ml26Cox6pFYe2Gfsn61v6QmaSbl1b1wMouoqxlgb3yaZU/s1600/body%20img%20className=min-w-max%20min-h-full%20%282%29.png"
                />
              </div>

              <p className="-m-14 text-2xl text-center font-mono" 
              >
                MIS XV AÑOS
              </p>
              <br/>
              <h1 className="p-10 text-5xl text-center font-serif font-bold">
                Brenda
              </h1>
              <br/>
              <p className="-m-10 text-2xl text-center font-mono" 
              >
                26 / DIC / 2024
              </p>

              <div className="p-5 flex justify-center -space-x-3">
                <img
                  className="box-content "
                  width={302}
                  height={102}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYxVcNmtwvetDWGOXFoLsCViplNN9ccY108NxVqf-lAzJIe0NJfxlzB1T5r6hzoQ_BvG9ovQwS-TcE65zIPh7MJk8Ecyc6QoZOqhG5IyThW9IV9zlBsukZ528iECKMre7gNoAg5i4D09ZWrh0jUx9SMEFCrwliidg_F4we84etktALFhPbGJRRvomsv3c/s1600/body%20img%20className=min-w-max%20min-h-full%20%283%29.png"
                />
              </div>
              <div className="w-screen flex items-center justify-center">
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


    </section>
  );
}
