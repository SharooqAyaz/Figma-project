
  const courses = [
    { title: "Training Courses", description: "The gradual accumulation of information about atomic and small-scale behaviour...", color: "bg-red-100", textColor: "text-red-600" },
    { title: "2,769 Online Courses", description: "The gradual accumulation of information about atomic and small-scale behaviour...", color: "bg-green-100", textColor: "text-green-600" },
    { title: "Training Courses", description: "The gradual accumulation of information about atomic and small-scale behaviour...", color: "bg-blue-500", textColor: "text-white" }
  ];
  
  const Courses = () => (
    <section className="py-20 bg-darkBlue text-white">
      <div className="flex justify-center space-x-8">
        {courses.map((course, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md bg-white ${course.color} w-64`}>
            <div className={`h-12 w-12 rounded ${course.color} mb-4`}></div>
            <h3 className={`text-xl font-semibold ${course.textColor}`}>{course.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
    );

    export default Courses;