import { licenses, myBadLicense, myLicense } from './api/data';
import LicenseLookup from './license-lookup.service';
import { licenseWeights } from './model/license';

describe('LicenseLookupService.isLicenseValid', () => {
    it('returns false if any properties on provided license are null or empty', () => {
        const isValid = LicenseLookup.isLicenseValid(myBadLicense);
        expect(isValid).toBeFalsy();
    });

    it('returns true if all properties on a license have values', () => {
        const isValid = LicenseLookup.isLicenseValid(myLicense);
        expect(isValid).toBeTruthy();
    });
});


describe('LicenseLookupService.findSimilarLicenses', () => {
    it('returns a list of up to 5 licenses ordered by greatest confidence score', () => {
        const similarLicenses = LicenseLookup.findSimilarLicenses(myLicense, licenses, licenseWeights);
        expect(similarLicenses.length).toBeLessThanOrEqual(5);
    });
});

