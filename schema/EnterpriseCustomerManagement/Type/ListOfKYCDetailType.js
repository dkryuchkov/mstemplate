var Modeler = require("../Modeler.js");
var className = 'TypeListOfKYCDetailType';

var TypeListOfKYCDetailType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  KYCDetail: {
      type: "TypeKYCDetailType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:KYCDetail",
        type: "KYCDetailType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  KYCDetail: {
      type: "TypeKYCDetailType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:KYCDetail",
        type: "KYCDetailType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfKYCDetailType;
Modeler.register(TypeListOfKYCDetailType, "TypeListOfKYCDetailType");
