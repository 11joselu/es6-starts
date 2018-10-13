const createIndicator = (orderId) => {
  const MAX_STRING = 5;
  return `
        <div id="indicator--${orderId}" class="indicator">
          <div id="indicator__screen--${orderId}" class="indicator__screen">
            <span id="indicator__screen__status--${orderId}" class="indicator__screen__status">Pending</span>
          </div>
          <div class="indicator__number">
            <span>${orderId .toString().substr(orderId .toString().length - MAX_STRING)}</span>
          </div>
        </div>
      `;
}

const paintOrder = (orderId) => {
  const indicators = document.getElementById('indicator-list');
  const li = document.createElement('li');
  li.innerHTML = createIndicator(orderId);
  indicators.appendChild(li);
}

const updateIndicatorStatusById = (id, status = 'success') => {
  const $indicator = document.getElementById(`indicator--${id}`);
  const $indicatorScreen = document.getElementById(`indicator__screen--${id}`);
  const $indicatorScreenStatus = document.getElementById(`indicator__screen__status--${id}`);

  $indicator.classList.toggle('indicator--shake');
  $indicatorScreen.classList.toggle(status);
  $indicatorScreenStatus.innerHTML = getStatusText(status);
}

const getStatusText = (status = 'success') => {
  if (status === 'error') {
    return 'Reject'
  }

  return 'Success';
}

const getUserOrder = () => {
  const $burguer = document.getElementById('burguer');
  const $drink = document.getElementById('drink');
  const burguerType = $burguer.value;
  const drinkType = $drink.value;
  const orderId = Date.now();

  $burguer.value = '';
  $drink.value = '';

  return {
    burguerType,
    drinkType,
    orderId
  }
}