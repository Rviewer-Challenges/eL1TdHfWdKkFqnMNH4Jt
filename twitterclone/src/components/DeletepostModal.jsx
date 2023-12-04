const DeletepostModal = () => {
  return (
    <main className="bg-black  rounded-lg   h-56 first-letter: absolute   z-50 flex flex-col w-72    -translate-x-50 -translate-y-50 right-20 ">
      <header>DeletePost</header>
      <p>
        This cant be undone and it will be removed from your profile ,this
        timeline of any accounts that follow your ,and from search resuslts.
      </p>
      <footer>
        <button className="bg-red-600 w-10 h-10 rounded-lg">Delete</button>

        <button className="w-10 h-10 rounded-lg">Cancel</button>
      </footer>
    </main>
  );
};

export default DeletepostModal;
