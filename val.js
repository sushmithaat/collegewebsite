function formValidation()
{
	var uname=document.registration.username;
	var faname=document.registration.fname;
	var uph=document.registration.ph;
	var uadd=document.registration.add;
	var uemail=document.registration.email;
	var uper=document.registration.per;
	var ucourse=document.registration.course;
	var upgm=document.registration.pgm;
	var uday=document.registration.day;
	var umonth=document.registration.month;
	var uyear=document.registration.year;

	if(allLetter(uname))
	{
		if(father(faname))
		{
			if(allnumeric(uph))
			{
				if(address(uadd))
				{
					if(ValidateEmail(uemail))
					{
						if(pervalidate(uper))
						{
							if(coursevalidate(ucourse))
							{
								if(pgmvalidate(upgm))
								{
									if(dayvalidate(uday))
									{
										if(monthvalidate(umonth))
										{
											if(yearvalidate(uyear))
											{
						
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}
function allLetter(uname)
{
	var letters=/^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="Name should not be empty/must have alphabet characters only";
		uname.focus();
		return false;
	}
}
function father(faname)
{
	var letter=/^[A-Za-z]+$/;
	if(faname.value.match(letter))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="Father Name should not be empty/must have alphabet characters only";
		faname.focus();
		return false;
	}
}
function allnumeric(uph)
{
	var number=/^([0-9]{10})+$/;
	if(uph.value.match(number))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="you must enter Phone no with 10 numeric characters only";
		uph.focus();
		return false;
	}
}
function address(uadd)
{
	
	var lett=/^[A-Za-z0-9]+$/;
	if(uadd.value.match(lett))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="Address should not be empty/please enter the address";
		uadd.focus();
		return false;
	}
}
function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="you must enter email id/have entered an invalid email";
		uemail.focus();
		return false;
	}
}
function pervalidate(uper)
{
	var pattern=/^\d{2}$/;
	if(uper.value.match(pattern))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="you must enter percentage\invalid percentage";
		uper.focus();
		return false;
	}
}
function coursevalidate(ucourse)
{
	if(ucourse.selectedIndex=="")
	{
		document.registration.a1.value="Please select course";
		ucourse.focus();
		return false;
	}
	return true;
}
function pgmvalidate(upgm)
{
	if(upgm.selectedIndex=="")
	{
		document.registration.a1.value="Please select programme";
		upgm.focus();
		return false;
	}
	return true;
}
function dayvalidate(uday)
{
	if(uday.selectedIndex=="")
	{
		document.registration.a1.value="Please select day";
		uday.focus();
		return false;
	}
	return true;
}
function monthvalidate(umonth)
{
	if(umonth.selectedIndex=="")
	{
		document.registration.a1.value="Please select month";
		umonth.focus();
		return false;
	}
	return true;
}
function yearvalidate(uyear)
{
	if(uyear.selectedIndex=="")
	{
		document.registration.a1.value="Please select year";
		uyear.focus();
		return false;
	}
	else
	{
		document.registration.a1.value="Form successfully submitted";
		return true;
	}
}