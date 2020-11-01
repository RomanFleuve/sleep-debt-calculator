const getSleepHours = day => {
    if (day === 'monday') 
    {
    return 8;
    } else if (day === 'tuesday') 
    {
    return 8;
    } else if (day === 'wednesday') 
    {
    return 8;
    } else if (day === 'thursday') 
    {
    return 8;
    } else if (day === 'friday') 
    {
    return 8;
    } else if (day === 'saturday') 
    {
    return 8;
    } else if (day === 'sunday') 
    {
    return 8;
    }
      else {return 'invalid day'}
    
    }
    
    const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 8 
    
    
      getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday');
    
    // console.log(getActualSleepHours())
    
    const getIdealSleepHours = () => {
      let idealHours = 10;
      return (idealHours * 7);
    }
    // console.log(getIdealSleepHours())
    
    const calculateSleepDebt = (idealHours) => {
      idealHours * 7;
      let actualSleepHours = getActualSleepHours();  let idealSleepHours = getIdealSleepHours();
      if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep this week - ' + (idealSleepHours) + ' hours');
      } 
      else if (actualSleepHours > idealSleepHours) {
        console.log('Woah, you are sleeping ' + (actualSleepHours - idealSleepHours) + ' hours too much');
      } 
      else if (actualSleepHours < idealSleepHours) {
        console.log('You need ' + (idealSleepHours - actualSleepHours) + ' hours more rest. Get some sleep tiger');
      }
    }
    
    calculateSleepDebt();