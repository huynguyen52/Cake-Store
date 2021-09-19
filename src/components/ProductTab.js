import React from "react";

import "./ProductTab.scss";

function ProductTab() {
  return (
    <section className="tabs-wrapper">
      <ul className="tabs-list">
        <li className="tab-item active">Description</li>
        <li className="tab-item">Additional information</li>
        <li className="tab-item">Reviews (0)</li>
      </ul>
      <div className="tab-panel">
        <h2>Description</h2>
        <strong>Sample Lorem Ipsum Text</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante.
          Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget
          vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque
          aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac,
          aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus
          rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis
          risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia
          at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus.
          Etiam tristique nisl a
        </p>
        <strong>Sample Lorem Ipsum Text</strong>
        <p>
          Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
          pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Pellentesque aliquet lacus
          vitae pede. Nullam mollis dolor ac nisi. Phasellus sit amet urna.
          Praesent pellentesque sapien sed lacus. Donec lacinia odio in odio. In
          sit amet elit. Maecenas gravida interdum urna. Integer pretium, arcu
          vitae imperdiet facilisis, elit tellus tempor nisi, vel feugiat ante
          velit sit amet mauris. Vivamus arcu. Integer pharetra magna ac lacus.
          Aliquam vitae sapien in nibh vehicula auctor. Suspendisse leo mauris,
          pulvinar sed, tempor et, consequat ac, lacus. Proin velit. Nulla
          semper lobortis mauris. Duis urna erat, ornare et, imperdiet eu,
          suscipit sit amet, massa. Nulla nulla nisi, pellentesque at, egestas
          quis, fringilla eu, diam.
        </p>
      </div>
    </section>
  );
}

export default ProductTab;
