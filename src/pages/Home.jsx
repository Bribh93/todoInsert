

const Home = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 rounded-2xl bg-black/50 my-10 page-transition">
      <div className="grid grid-cols-12 gap-4 mb-4">
        <section className="col-span-12 md:col-span-4 xl:col-span-3">
          <div className="relative w-full h-80">
            <img
              src="https://img.freepik.com/free-photo/smiley-man-posing-cv-medium-shot_23-2149927607.jpg?ga=GA1.1.1481528647.1685589990&semt=ais_hybrid&w=740"
              className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl mb-4"
              fill
              alt="Image"
              loading="lazy"
              blurDataURL="https://img.freepik.com/free-photo/smiley-man-posing-cv-medium-shot_23-2149927607.jpg?ga=GA1.1.1481528647.1685589990&semt=ais_hybrid&w=740"
            />
          </div>
        </section>
        <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-8">
          <div>
            <h1 className="text-5xl md:text-7xl">Malkin</h1>
            <h1 className="text-5xl md:text-7xl font-bold">Anderson</h1>
            <p className="md:text-2xl text-muted-foreground">Diseñadora UX / UI</p>
          </div>
          <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2 dark:before:bg-white">
            Perfil
          </h3>
          <p className="text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </section>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <section className="col-span-12 md:col-span-4 xl:col-span-4">
          <div className="bg-[#fbede0] rounded-tl-3xl p-8 mb-4">
            <h3 className="dark:text-black relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Educación
            </h3>
            <div className="mb-6">
              <p className="text-gray-500 text-sm">2014 - 2018</p>
              <h4 className="font-medium dark:text-black">Nombre del titulo</h4>
              <p className="text-gray-500 text-sm">Nombre de la universidad</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">2012 - 2014</p>
              <h4 className="font-medium dark:text-black">Nombre del titulo</h4>
              <p className="text-gray-500 text-sm">Nombre de la universidad</p>
            </div>
          </div>
          <div className="bg-[#fbebeb] rounded-tr-3xl p-8">
            <h3 className="dark:text-black relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Contacto
            </h3>
            <div className="mb-6">
              <h4 className="font-medium dark:text-black">Celular</h4>
              <p className="text-gray-500 text-sm">+52 614 1 00 00 00</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium dark:text-black">Email</h4>
              <p className="text-gray-500 text-sm">email@jt-ui.com</p>
            </div>
            <div>
              <h4 className="font-medium dark:text-black">Dirección</h4>
              <p className="text-muted-foreground text-sm text-gray-500">Calle y número</p>
              <p className="text-gray-500 text-sm">Ciudad y país</p>
            </div>
          </div>
        </section>
        <section className="col-span-12 md:col-span-8 xl:col-span-8">
          <div className="bg-[#f8f3ef] rounded-tl-3xl rounded-br-3xl p-8 mb-4">
            <h3 className="dark:text-black relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Experiencia
            </h3>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-muted-foreground text-sm w-full md:w-[30%]">
                <p className="text-gray-500">2020 - presente</p>
                <p className="text-gray-500">Nombre de la empresa</p>
              </div>
              <div className="w-full md:w-[70%]">
                <h4 className="font-semibold dark:text-black">Diseñadora Senior UX</h4>
                <p className="text-muted-foreground text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-muted-foreground text-sm w-full md:w-[30%]">
                <p className="text-gray-500">2017 - 2020</p>
                <p className="text-gray-500">Nombre de la empresa</p>
              </div>
              <div className="w-full md:w-[70%]">
                <h4 className="font-semibold dark:text-black">Diseñadora Junior UX</h4>
                <p className="text-muted-foreground text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="text-muted-foreground text-sm w-full md:w-[30%]">
                <p className="text-gray-500">2010 - 2017</p>
                <p className="text-gray-500">Nombre de la empresa</p>
              </div>
              <div className="w-full md:w-[70%]">
                <h4 className="font-semibold dark:text-black">Diseñadora UX</h4>
                <p className="text-muted-foreground text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#fbede0] rounded-tr-3xl rounded-bl-3xl p-8">
            <h3 className="dark:text-black relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Habilidades
            </h3>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 mb-4">
              <div className="flex items-center justify-between lg:justify-start gap-4 dark:text-black">
                <span>Photoshop</span>{' '}
                <div className="flex items-center gap-1">
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle opacity-30"></i>
                  <i className="fi fi-ss-circle opacity-30"></i>
                </div>
              </div>
              <div className="flex items-center justify-between lg:justify-start gap-4 dark:text-black">
                <span>InDesign</span>{' '}
                <div className="flex items-center gap-1">
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle opacity-30"></i>
                  <i className="fi fi-ss-circle opacity-30"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row md:items-center gap-2 lg:gap-10 dark:text-black">
              <div className="flex items-center justify-between lg:justify-start gap-4">
                <span>Ilustrator</span>{' '}
                <div className="flex items-center gap-1">
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle opacity-30"></i>
                </div>
              </div>
              <div className="flex items-center justify-between lg:justify-start gap-4 dark:text-black">
                <span>Adobe XD</span>{' '}
                <div className="flex items-center gap-1">
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                  <i className="fi fi-ss-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
