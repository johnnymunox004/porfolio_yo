export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Recursos y Tutoriales</h1>
      <div className="grid gap-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="grid gap-4">
              {category.resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.link}
                  className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    name: "Spring Boot",
    resources: [
      {
        title: "Guía Completa de Spring Boot",
        description: "Tutorial paso a paso para dominar Spring Boot",
        link: "#"
      },
      // ... más recursos
    ]
  },
  // ... más categorías
]; 