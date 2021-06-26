
    /*SLDS Tabs JS*/
  $('.slds-tabs--default__link , .slds-tabs--scoped__link').click(function(){
    $(this).parent().parent().find('.slds-tabs--default__link,.slds-tabs--scoped__link').attr('aria-selected','false');
    $(this).attr('aria-selected','true');
    $(this).parent().parent().find('.slds-tabs--default__link,.slds-tabs--scoped__link').attr('tabindex','-1');
    $(this).attr('tabindex','0');
    $(this).parent().addClass('slds-active').siblings().removeClass('slds-active');
    $(this).parent().parent().parent().find('.'+$(this).parent().parent().parent().find('.slds-tabs--default__content,.slds-tabs--scoped__content')[0].classList[0]).removeClass('slds-show').addClass('slds-hide');
    $(this).parent().parent().parent().find('#'+$(this).attr('aria-controls')).removeClass('slds-hide').addClass('slds-show');
  }); 
  /*SLDS Tabs JS*/

