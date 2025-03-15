import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function Sidebar1() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sobre mi</h2>
                <div className="sidebar-menu">
            <ul>
              <li>
                <i className="pi pi-home"></i>
                Dashboard
              </li>
              <li>
                <i className="pi pi-user"></i>
                Fiscalización
              </li>
              <li>
                <i className="pi pi-users"></i>
                Recursos Humanos
              </li>
              <li>
                <i className="pi pi-box"></i>
                Extra
              </li>
              <li>
                <i className="pi pi-cog"></i>
                Configuración
              </li>
            </ul>
          </div>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}