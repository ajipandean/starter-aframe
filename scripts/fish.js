for (let i = 1; i <= 15; i++) {
  let x = Math.floor((Math.random() * 51) - 25);
  let y = Math.floor(Math.random() * 10 + 1);
  let z = Math.floor((Math.random() * 51) - 10);
  let scene = document.querySelector('a-scene');
  let entity = document.createElement('a-entity');
  let gltfModel = document.createAttribute('gltf-model');
  let position = document.createAttribute('position');
  let scale = document.createAttribute('scale');

  gltfModel.value = '#fish';
  position.value = `${x} ${y} ${z}`;
  scale.value = '0.3 0.3 0.3';

  entity.setAttributeNode(gltfModel);
  entity.setAttributeNode(position);
  entity.setAttributeNode(scale)

  scene.appendChild(entity);
}
