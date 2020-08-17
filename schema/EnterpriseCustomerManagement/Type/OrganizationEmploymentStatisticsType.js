var Modeler = require("../Modeler.js");
var className = 'TypeOrganizationEmploymentStatisticsType';

var TypeOrganizationEmploymentStatisticsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TotalEmployment: {
      type: "TypeTotalEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalEmployment",
        type: "TotalEmploymentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryAddressEmploymentDetail: {
      type: "TypePrimaryAddressEmploymentDetailType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryAddressEmploymentDetail",
        type: "PrimaryAddressEmploymentDetailType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentStatisticsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentStatisticsType",
        attribute: false,
        ns: "WL5G3N2"
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
	  TotalEmployment: {
      type: "TypeTotalEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalEmployment",
        type: "TotalEmploymentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryAddressEmploymentDetail: {
      type: "TypePrimaryAddressEmploymentDetailType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryAddressEmploymentDetail",
        type: "PrimaryAddressEmploymentDetailType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentStatisticsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentStatisticsType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeOrganizationEmploymentStatisticsType;
Modeler.register(TypeOrganizationEmploymentStatisticsType, "TypeOrganizationEmploymentStatisticsType");
