var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryAddressEmploymentDetail';

var ElementPrimaryAddressEmploymentDetail = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryAddressEmploymentDetail: {
      type: "TypePrimaryAddressEmploymentDetailType",
      wsdlDefinition: {
        name: "PrimaryAddressEmploymentDetail",
        type: "PrimaryAddressEmploymentDetailType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PrimaryAddressEmploymentDetail: {
      type: "TypePrimaryAddressEmploymentDetailType",
      wsdlDefinition: {
        name: "PrimaryAddressEmploymentDetail",
        type: "PrimaryAddressEmploymentDetailType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryAddressEmploymentDetail;
Modeler.register(ElementPrimaryAddressEmploymentDetail, "ElementPrimaryAddressEmploymentDetail");
