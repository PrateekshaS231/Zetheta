function simulateAttack(asset, attackerSkill = 70) {
  const exposure = asset.exposure / 100;
  const defense = asset.security_level / 100;
  const attacker = attackerSkill / 100;

  const prob = (exposure + attacker - defense) / 2;

  if (Math.random() < prob) {
    return {
      success: true,
      impact: asset.value_if_compromised,
      message: "Attack Successful 💥"
    };
  }

  return {
    success: false,
    impact: 0,
    message: "Attack Blocked 🛡️"
  };
}

module.exports = simulateAttack;
