function Usuarios({children,persoa}) {
    console.log('props: ',persoa)
    return (
      <div>Componente de usuarios
        {children}
      </div>

    );
  }

  export{Usuarios}