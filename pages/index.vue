<script setup lang="ts">
useSeoMeta({
  title: 'Facturación electrónica y agendamiento para tu negocio',
  description: 'Clichín es una plataforma para gestionar facturación electrónica SRI, contabilidad NIIF, inventario, agendamiento y pagos. Gratis siempre para contadores.',
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <img src="/logo.png" alt="Clichín" class="hero-logo">
      <h1>Facturación electrónica, inventario y agendamiento en un solo lugar</h1>
      <p>Clichín conecta la facturación autorizada por el SRI con el inventario, el agendamiento de citas y el cobro de pagos de tu negocio.</p>
    </div>
  </section>

  <main class="container">
    <section class="section">
      <h2>Todo lo que necesita tu negocio</h2>
      <div class="grid">
        <div class="card">
          <h3>Facturación electrónica SRI</h3>
          <p>Facturas, proformas, notas de crédito y débito, guías de remisión, retenciones y liquidaciones de compra, autorizadas directamente con el SRI.</p>
        </div>
        <div class="card">
          <h3>Contabilidad NIIF</h3>
          <p>Plan de cuentas NIIF, asientos automáticos al facturar y comprar, y los estados financieros (Balance General, Estado de Resultados, Flujo de Efectivo) listos para la Superintendencia de Compañías.</p>
        </div>
        <div class="card">
          <h3>Inventario</h3>
          <p>Productos, bodegas, proveedores y movimientos de stock conectados directamente con lo que facturás.</p>
        </div>
        <div class="card">
          <h3>Agendamiento de citas</h3>
          <p>Tus clientes agendan en línea, reciben confirmación y recordatorios, y la cita se factura automáticamente al confirmarse.</p>
        </div>
        <div class="card">
          <h3>Cobros y pagos</h3>
          <p>Pagos en línea con Payphone o transferencia bancaria con comprobante, con aprobación desde el panel de administración.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Planes</h2>
      <p>Elegí el plan según lo que necesita tu negocio. Todos incluyen facturación electrónica SRI, contabilidad NIIF e inventario como base.</p>
      <div class="plans-grid">
        <div class="plan-card">
          <span class="plan-badge">Facturación + Inventario</span>
          <h3 class="plan-name">Negocio</h3>
          <p class="plan-price">$4.99<span>/mes</span></p>
          <p class="plan-price-alt">o $49.00/año (ahorrás 2 meses)</p>
          <p class="plan-audience">Comercios y tiendas que solo necesitan facturar y controlar stock.</p>
          <ul>
            <li>Facturación electrónica SRI: facturas, notas de crédito y débito, guías de remisión, retenciones y liquidaciones de compra</li>
            <li>Proformas, con conversión a factura en un clic</li>
            <li>Envío de tus comprobantes por email y WhatsApp</li>
            <li>Contabilidad NIIF: plan de cuentas, asientos automáticos y estados financieros para la Superintendencia de Compañías</li>
            <li>Inventario: productos, bodegas, proveedores y movimientos de stock</li>
            <li>Reportes</li>
          </ul>
        </div>

        <div class="plan-card plan-dark">
          <span class="plan-badge">Negocio + Agenda</span>
          <h3 class="plan-name">Profesional</h3>
          <p class="plan-price">$9.99<span>/mes</span></p>
          <p class="plan-price-alt">o $99.00/año (ahorrás 2 meses)</p>
          <p class="plan-audience">Para negocios que atienden con cita: abogados, arquitectos y consultores — y también <strong>centros de belleza y estética</strong>: barberías, salones de manicure, peluquerías y spas.</p>
          <ul>
            <li>Todo lo del plan Negocio</li>
            <li>Portal público de agendamiento para que tus clientes reserven solos</li>
            <li>Confirmación y recordatorios automáticos de cada cita</li>
            <li>Gestión de casos/expedientes, anticipos e hitos</li>
            <li>Equipo con roles (Staff)</li>
          </ul>
        </div>

        <div class="plan-card">
          <span class="plan-badge">Agenda + Historia clínica</span>
          <h3 class="plan-name">Salud</h3>
          <p class="plan-price">$19.99<span>/mes</span></p>
          <p class="plan-price-alt">o $199.00/año (ahorrás 2 meses)</p>
          <p class="plan-audience">Consultorios y clínicas.</p>
          <ul>
            <li>Todo lo del plan Profesional</li>
            <li>Historia clínica: antecedentes, diagnósticos (CIE-11), receta y exploración física por paciente</li>
            <li>Resumen de cada consulta enviado al paciente por email</li>
            <li>Manejo reforzado de datos sensibles de salud</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="highlight">
        <span class="badge">Para contadores</span>
        <p class="plan-price">$0<span>/siempre</span></p>
        <h2>El panel administrativo es gratis, siempre</h2>
        <p>Si sos contador y llevás la contabilidad de varios negocios, Clichín no te cobra por administrar tus clientes desde el panel.</p>
        <ul>
          <li><strong>Una sola cuenta para todos tus clientes.</strong> Te registrás una vez como contador y desde ahí creás y administrás el perfil de cada empresa que llevás.</li>
          <li><strong>Cambio rápido entre empresas.</strong> Un selector en el panel te deja saltar de una empresa a otra sin cerrar sesión ni volver a autenticarte.</li>
          <li><strong>Cada empresa queda independiente.</strong> Su propia facturación electrónica SRI, su propio inventario, su propia agenda y sus propios clientes — vos solo administrás el acceso.</li>
          <li><strong>Acceso administrativo sin costo.</strong> El uso del panel para gestionar a tus clientes como contador no tiene cargo.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>Legal</h2>
      <p>
        <a href="https://www.mauloasan.com/privacy" target="_blank" rel="noopener">Política de privacidad</a>
        &nbsp;·&nbsp;
        <a href="https://www.mauloasan.com/terms" target="_blank" rel="noopener">Términos y condiciones</a>
        &nbsp;·&nbsp;
        <NuxtLink to="/eliminar-datos">Eliminación de datos</NuxtLink>
      </p>
    </section>
  </main>
</template>
