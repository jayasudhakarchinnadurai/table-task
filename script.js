var form=document.querySelector('.form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

parent=document.querySelector('.user_data')
container=document.createElement('tr')


FN=document.createElement('td')
FN_data=document.querySelector('[placeholder="FirstName"]')
FN.innerText=FN_data.value
container.append(FN)

lN=document.createElement('td')
lN_data=document.querySelector('[placeholder="lastName"]')
lN.innerText=lN_data.value
container.append(lN)



Address=document.createElement('td')
Address_data=document.querySelector('[placeholder="Address"]')
Address.innerText=Address_data.value
container.append(Address)

pincode=document.createElement('td')
pincode_data=document.querySelector('[placeholder="pincode"]')
pincode.innerText=pincode_data.value
container.append(pincode)

Gender=document.createElement('td')
Gender_data=document.querySelector('[placeholder="Gender"]')
Gender.innerText=Gender_data.value
container.append(Gender)

Food=document.createElement('td')
Food_data=document.querySelector('[placeholder="Food"]')
Food.innerText=Food_data.value
container.append(Food)


State=document.createElement('td')
State_data=document.querySelector('[placeholder="State"]')
State.innerText=State_data.value
container.append(State)

country=document.createElement('td')
country_data=document.querySelector('[placeholder="country"]')
country.innerText=country_data.value
container.append(country)

if(FN_data.value !='' && lN_data.value !='' && Address_data.value !='' && pincode_data.value !='' 
&& Gender_data.value !=''  && Food_data.value !='' && country_data.value !='' && State_data.value !=''){
    parent.append(container)
}
FN_data.value=''
lN_data.value=''
Address_data.value=''
pincode_data.value=''
Gender_data.value=''
Food_data.value=''
country_data.value=''
State_data.value =''


})
