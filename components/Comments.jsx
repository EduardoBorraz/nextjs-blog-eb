const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div className="bg-gray-100 p-6 rounded-lg mb-6 ">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-dashed border-gray-500/20 pb-6 mb-6">
            <div className="flex items-start gap-x-4">
              <img
                src="https://img.freepik.com/foto-gratis/primer-plano-joven-exitoso-sonriendo-camara-pie-traje-casual-contra-fondo-azul_1258-66609.jpg?w=1800&t=st=1674767726~exp=1674768326~hmac=61dcd61cc7f2f4d739abe760c144b25b58dbc8a9c9be9f914d38d4df8623659a"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 mt-1"
              />
              <div>
                <span className="text-gray-900 font-medium">
                  {comment.name}
                </span>
                <p className="text-gray-500 text-sm">{comment.email}</p>
              </div>
            </div>
          </div>
          <div>
            <p>{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
