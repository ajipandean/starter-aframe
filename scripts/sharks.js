let sharks = [1, 2, 3];

for (let i = 1; i <= sharks.length; i++) {
  let x = Math.floor((Math.random() * 21) - 10);
  let y = Math.floor(Math.random() * 5 + 1);
  let z = Math.floor((Math.random() * 21) - 10);
  let scene = document.querySelector('a-scene');
  let entity = document.createElement('a-entity');
  let gltfModel = document.createAttribute('gltf-model');
  let position = document.createAttribute('position');

  gltfModel.value = '#white-shark';
  position.value = `${x} ${y} ${z}`;

  entity.setAttributeNode(gltfModel);
  entity.setAttributeNode(position);

  scene.appendChild(entity);
}
